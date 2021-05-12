const mongoose = require('mongoose');

const abilitySchema = new mongoose.Schema({
  code:{type: String, required: true},
  name: {type:String, required: true},
  level: {type:Number, default: 0},
  superAbility:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ability'
  }
});

const Ability = mongoose.model('Ability', abilitySchema);

module.exports = {
  Ability
}