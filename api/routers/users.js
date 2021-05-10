const mongoose = require('mongoose');
const _ = require('lodash');
const bcrypt = require('bcrypt');
//const Joi = require('joi');
const yup = require('yup');
const express = require('express');
const router = express.Router();
const { User, validateUser } = require('../models/users');
const { Department } = require('../models/departments');

// 用户注册 
router.post('/register', async (req, res)=>{
  // 验证
  const userInfo = _.pick(req.body, ['name', 'account', 'phone', 'password', 'department']);
  
  validateUser(userInfo).catch(err=>{
    res.json({
      status: -2,
      message: err.message
    });
    return;
  });
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
    });
    return;
  } catch(err){
    res.json({
      status: -1,
      message: `添加用户失败: ${err.message}`
    });
    return;
  }
});

// 用户登录
router.post('/login', async (req, res)=>{
  // 验证数据格式
  const userInfo = _.pick(req.body, ["account", "password"]);
  validate(userInfo).catch(err=>{
    res.send({
      status: -2,
      message: err.message
    });
    return;
  })
  
  // 查看用户是否存在
  const user = await User.findOne({account: userInfo.account});
  if(!user){
    res.send({
      status: -1,
      message: "用户帐号或密码错误，请重试。"
    });
    return;
  }
  // 验证用户账号和密码是否匹配
  const valid = await bcrypt.compare(userInfo.password, user.password);
  if(!valid){
    res.send({
      status: -1,
      message: "用户帐号或密码错误，请重试。"
    });
    return;
  }
  res.send({
    status: 0,
    message: "登录成功",
    data: _.pick(user, ["_id", "account"])
  });
})

async function validate(req){
  /*
  const schema = {
    account: Joi.string().required(),
    password: Joi.string().required().min(6)
  }
  return Joi.validate(req, schema);*/
  const schema = yup.object().shape({
    account: yup.string().required("用户帐号不能为空。"),
    password: yup.string().required("用户密码不能为空。").min(6, "密码长度不能小于6位。")
  });
  return await schema.validate(req);
}

module.exports = router;