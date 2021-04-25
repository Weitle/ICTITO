const express = require('express');
const { validateEngineer } = require('../models/engineers');
const router = express.Router();

router.get('/', (req, res)=>{
  res.json({
    message: 'engineers list'
  })
});

router.post('/', (req, res)=>{
  const {error} = validateEngineer(req.body);
  if(error){
    res.json({
      status: -1,
      message: `validate failed: ${error.details[0].message}`
    });
    return;
  }
  res.json({
    status: 0,
    message: 'create engineer successed'
  })
})

module.exports = router;