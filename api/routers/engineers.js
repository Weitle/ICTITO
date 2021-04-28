const express = require('express');
const { validateEngineer, Engineer } = require('../models/engineers');
const {Department} = require('../models/departments');
const router = express.Router();

router.get('/', (req, res)=>{
  res.json({
    message: 'engineers list'
  })
});

router.post('/', (req, res)=>{
  // validate
  const {error} = validateEngineer(req.body);
  if(error){
    res.json({
      status: -1,
      message: `validate failed: ${error.details[0].message}`
    });
    return;
  }
  // 查找所在部门
  res.json({
    status: 0,
    message: 'create engineer successed'
  })
})

module.exports = router;