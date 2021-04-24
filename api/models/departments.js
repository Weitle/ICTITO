const mongoose = require('mongoose');
const Joi = require('joi');

// 创建模式和模型
const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20
  },
  level: {
    type: Number,
    default: 0
  },
  superDepartment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department'
  },
  marketing:{type: Boolean, default: false},
  delivered: {type: Boolean, default: false}
});

const Department = mongoose.model('Department', departmentSchema);

function validateDepartment(department){
  const schema = {
    name: Joi.string().min(2).max(20).required(),
    superId: Joi.string().required(),
    level: Joi.number().min(0),
    marketing: Joi.boolean().required(),
    delivered: Joi.boolean().required()
  }
  return Joi.validate(department, schema);
}

module.exports = {
  Department,
  validateDepartment
}