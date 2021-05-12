const _ = require('lodash');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { Ability } = require('../models/abilities');


router.get('/', (req, res)=>{
  res.json({
    "abilities": "Abilities"
  })
});

router.post('/new', async (req, res)=>{
  const { code, name, superId } = _.pick(req.body, ["code", "name", "level", "superId"]);
  const superAbility = await Ability.findById(superId);
  if(!superId){
    res.json({
      status: -2,
      message: 'super ability is not exists.'
    });
    return;
  }
  let ability = new Ability({
    code: code,
    name: name,
    level: superAbility.level + 1,
    superAbility: superAbility._id
  });
  try{
    ability = await ability.save();
    res.json({
      status: 0,
      message: "create ability successed.",
      data: ability
    })
  } catch(err){
    res.json({
      status: -1,
      message: `create ability failed: ${err.message}`
    });
  }
});

module.exports = router;