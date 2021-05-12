const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  project_code: {type: String, required: true},
  project_name: {type: String, required: true},
  marketing:{type: mongoose.Schema.Types.ObjectId, ref: 'Department'},
  delivered:{type: mongoose.Schema.Types.ObjectId, ref: 'Department'},
  margin: {type: Number, default: 0}
});