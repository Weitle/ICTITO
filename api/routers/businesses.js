const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));

//  获取所有商机 
router.get('/', (req, res)=>{
    res.send('Businesses List');
});

// 获取指定商机
router.get('/:id', (req, res)=>{
    res.send(`Business #${req.params.id}`);
});

// 创建新商机
router.post('/add', (req, res)=>{
    console.log(req.body);
    res.json({'message': 'add business'});
});

module.exports = router;