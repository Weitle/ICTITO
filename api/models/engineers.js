const mongoose = require('mongoose');
const Joi = require('joi');

// 创建模式和模型
const engineerSchema = new mongoose.Schema({
  name: {type: String, minlength: 2, maxlength: 5, required: true},
  oacode: {type: String, required:true, unique: true},
  email: {type: String, required: true, unique: true},
  phone: {type: String, minlength: 11, maxlength: 11, unique: true, required: true},
  department_l2: {type: String, }
  certification: {}
});

const Engineer = mongoose.model('Engineer',engineerSchema);

function validateEngineer(department){
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
  Engineer,
  validateEngineer
}