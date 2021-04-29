const mongoose = require('mongoose');
const Joi = require('joi');

const engineerSchema = new mongoose.Schema({
  name: {type: String, minlength: 2, maxlength: 4, required: true},
  email: {type: String, minlength: 2, maxlength:50, unique: true, required: true},
  oacode: {type: String, required: true, unique: true},
  phone:{type:String, required: true, unique: true, minlength: 11, maxlength: 11},
  department_l2:{type: mongoose.Schema.Types.ObjectId, ref: 'Department'},
  department_l3: {type: mongoose.Schema.Types.ObjectId, ref: 'Department', default: null},
  isFulltime: {type: Boolean, default: false, required: true},
  tags: [String],
  certifications: [
    {
      name: {type: String, required: true},
      batch: {type: String, required: true},
      date: {type: Date, required: true}
    }
  ]
});

const Engineer = mongoose.model('Engineer', engineerSchema);

function validateEngineer(engineer){
  const schema = {
    name: Joi.string().min(2).max(4).required(),
    email: Joi.string().min(2).max(50).required(),
    oacode: Joi.string().required(),
    phone: Joi.string().min(11).max(11).required(),
    department: Joi.string().required(),
    isFulltime: Joi.boolean().required(),
    tags: Joi.array(),
    certifications: Joi.array()
  }
  return Joi.validate(engineer, schema);
}

module.exports = {
  Engineer,
  validateEngineer
}