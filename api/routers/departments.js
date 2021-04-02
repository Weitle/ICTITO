const express = require('express');
const router = express.Router();

const db = require('../scripts/db');

//  获取所有 departments 
router.get('/', (req, res)=>{
   res.send('Departments');
});

// 获取所有营销单位
router.get('/marketing', (req, res)=>{
    const sql = `select * from departments where isMarketing=1`;
    db.connect((err)=>{
        if(err){
            //res.json({status: -1, message: `数据库连接失败：${err.message}`});
            console.log(`数据库连接失败：${err.message}`);
            return;
        }
        db.query(sql, (err, results)=>{
            if(err){
                /*res.json({
                    status: -1,
                    message: `查询数据失败：${err.message}`
                });*/
                console.log(`查询数据失败：${err.message}`);
                return;
            }
            results.map(result=>{
                console.log(result.name);
            })
        });
        db.end()
    });
});

module.exports = router;