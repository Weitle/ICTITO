const mongoose = require('mongoose');
//const Joi = require('joi');
const yup = require('yup');

const engineerSchema = new mongoose.Schema({
  name: {type: String, minlength: 2, maxlength: 4, required: true},
  account: {type: String, minlength: 2, maxlength:50, unique: true, required: true},
  oacode: {type: String, required: true, unique: true},
  phone:{type:String, required: true, unique: true, match: /^1\d{10}$/},
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
    name: yup.string().min(2).max(4).required(),
    email: yup.string().min(2).max(50).required(),
    oacode: yup.string().required(),
    phone: yup.string().min(11).max(11).required(),
    department: yup.string().required(),
    isFulltime: yup.boolean().required(),
    tags: yup.array(),
    certifications: yup.array()
  }
  return schema.validate(engineer);
}

module.exports = {
  Engineer,
  validateEngineer
}