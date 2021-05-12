const mongoose = require('mongoose');
//const Joi = require('joi');
const yup = require('yup');

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
  /*
  const schema = {
    name: Joi.string().min(2).max(20).required(),
    superId: Joi.string().required(),
    level: Joi.number().min(0),
    marketing: Joi.boolean().required(),
    delivered: Joi.boolean().required()
  }
  return Joi.validate(department, schema);*/
  const schema = yup.object().shape({
    name: yup.string().min(2, "组织机构名称不能少于2个字符。").max(20, "组织机构名称不能多于20个字符。").required("组织机构名称不能为空。"),
    superId: yup.string().required("上一层级组织机构不能为空。"),
    level: yup.number().default(0),
    marketing: yup.boolean().default(false),
    delivered: yup.boolean().default(false)
  });
  return schema.validate(department);
}

module.exports = {
  Department,
  validateDepartment
}