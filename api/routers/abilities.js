const _ = require('lodash');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { Ability } = require('../models/abilities');


router.get('/', async (req, res)=>{
  const abilities = await Ability.find().select({code: 1, name: 1, level: 1, superId: 1});
  if(!abilities){
    res.json({
      status: -1,
      message: "未找到能力清单。"
    });
    return;
  }
  res.json({
    status: 0,
    message: `共找到 ${abilities.length} 条自主能力。`,
    abilities: abilities
  });
});

router.post('/', async (req, res)=>{
  const { code, name, superId } = _.pick(req.body, ["code", "name",  "superId"]);
  
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