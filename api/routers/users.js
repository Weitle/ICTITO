const mongoose = require('mongoose');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const express = require('express');
const router = express.Router();
const { User, validateUser } = require('../models/users');
const { Department } = require('../models/departments');

// 用户注册 
router.post('/register', async (req, res)=>{
  // 验证
  const userInfo = _.pick(req.body, ['name', 'account', 'phone', 'password', 'department']);
  const {error} = validateUser(userInfo);
  if(error){
    res.json({
      status: -2,
      message: `validate failed: ${error.details[0].message}`
    });
    return;
  }
  // 用户帐号唯一性验证
  let user = await User.findOne({account: userInfo.account});
  if(user){
    res.json({
      status: -3,
      message: '该用户帐号已存在，请重试！'
    });
    return;
  }
  // department 存在验证
  const validDepartmentId = mongoose.Types.ObjectId.isValid(userInfo.department);
  if(!validDepartmentId){
    res.json({
      status: -4,
      message: '所在单位不存在，请重试。'
    });
    return;
  }
  const department = await Department.findById(userInfo.department);
  if(!department){
    res.json({
      status: -4,
      message: '所在单位不存在，请重试。'
    });
    return;
  }
  try {
    const salt = await bcrypt.genSalt(10);
    userInfo.password = await bcrypt.hash(userInfo.password, salt);
    user = await User.create(userInfo);
    res.json({
      status: 0,
      message: '添加用户成功。',
      data: _.pick(user, ["_id", "name", "account", "department"])
    })
  } catch(err){
    res.json({
      status: -1,
      message: `添加用户失败: ${err.message}`
    });
  }
});

// 用户登录
router.post('/login', async (req, res)=>{
  // 验证数据格式
  const userInfo = _.pick(req.body, ["account", "password"]);
  const { error } = validate(userInfo);
  if(error){
    res.json({
      status: -2,
      message: error.details[0].message
    });
    return;
  }
  // 查看用户是否存在
  const user = await User.findOne({account: userInfo.account});
  if(!user){
    res.json({
      status: -1,
      message: "用户帐号或密码错误，请重试。"
    });
    return;
  }
  // 验证用户账号和密码是否匹配
  const valid = await bcrypt.compare(userInfo.password, user.password);
  if(!valid){
    res.json({
      status: -1,
      message: "用户帐号或密码错误，请重试。"
    });
    return;
  }
  res.json({
    status: 0,
    message: "登录成功",
    data: _.pick(user, ["_id", "account"])
  });
})

function validate(req){
  const schema = {
    account: Joi.string().required(),
    password: Joi.string().required().min(6)
  }
  return Joi.validate(req, schema);
}

module.exports = router;