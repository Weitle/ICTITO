const express = require('express');
const router = express.Router();

//  获取所有 projects 
router.get('/', (req, res)=>{
    res.send('Project List');
});

// 获取指定 project
router.get('/:id', (req, res)=>{
    res.send(`Project #${req.params.id}`);
});

module.exports = router;