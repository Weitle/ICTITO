const mongoose = require('mongoose');
const Joi = require('joi');

const User = mongoose.model('User', new mongoose.Schema({
  name: {type: String, required: [true, '请提供用户名。']},
  account: {type: String, unique: [true, '该用户帐号已存在。'], required: [true, '请提供用户帐号，与门户帐号前缀一致。']},
  password: {type: String, minlength: [6, '密码不能低于6位。']},
  department: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Department'
  }
}));

function validateUser(user){
  const schema = {
    name: Joi.string().required(),
    account: Joi.string().required(),
    password: Joi.string().required().min(6),
    department: Joi.string().required()
  }
  return Joi.validate(user, schema);
}

module.exports = {
  User,
  validateUser
}