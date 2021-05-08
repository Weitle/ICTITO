const express = require('express');
const router = express.Router();
const { User, validateUser } = require('../models/users');
const { Department } = require('../models/departments');
const _ = require('lodash');
const bcrypt = require('bcrypt');

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
  const solt = bcrypt.genSalt(10);
  userInfo.password = bcrypt.hash(userInfo.password, salt);
  let user = await User.find({account: userInfo.account});
  if(user){
    res.json({
      status: -3,
      message: '该用户帐号已存在，请重试！'
    });
    return;
  }
  // department 存在验证
  const department = await Department.findById(userInfo.department);
  if(!department){
    res.json({
      status: -4,
      message: '所在单位不存在，请重试。'
    });
    return;
  }
  try{
    user = await user.save();
    res.json({
      status: 0,
      message: '添加用户成功。',
      data: user
    });
  } catch(err){
    res.json({
      status: -1,
      message: `添加用户失败：${err.message}`
    });
  }
});

module.exports = router;