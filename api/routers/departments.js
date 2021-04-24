const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const { Department, validateDepartment } = require('../models/departments');

// 获取所有部门信息
router.get('/', async (req, res)=>{
    try {
        const departments = await Department.find().select({name:1, superDepartment: 1, level: 1, marketing: 1, delivered: 1});
        res.json({
            status: 0,
            message: `get ${departments.length} departments`,
            data: departments
        })
    } catch(err){
        res.json({
            status: -1,
            message: `get departments failed: ${err.message}`
        })
    }
});

// 获取指定部门信息
router.get('/:id', async (req, res)=>{
    try {
        const department = await Department.findById(req.params.id);
        if(!department){
            res.json({
                status: -2,
                message: 'department is not exists'
            });
        }
        res.json({
            status: 0,
            message: 'get department successed',
            data: department
        })
    }catch(err){
        res.json({
            status: -1,
            message: `get department failed: ${err.message}`
        });
    }
    
});

// 获取某一层级部门信息
router.get('/level/:level', async (req, res)=>{
    try{
        const departments = await Department.find({level: req.params.level}).select({name:1, superDepartment: 1, level:1, marketing:1, delivered: 1});
        res.json({
            status: 0,
            message: `get ${departments.length} departments`,
            data: departments
        });
    } catch(err){
        res.json({
            status: -1,
            message: `get departments failed: ${err.message}`
        })
    }
});

// 创建一个新的部门
router.post('/', async (req, res)=>{
    // validate
    const { error } = validateDepartment(res.body);
    if(error){
        res.json({
            status: -2,
            message: `validate failed: ${error.details[0].message}`
        });
    }

    // create new department
    try {
        const superId = req.body.superId;
        const super_department = await Department.findById(superId);
        if(!super_department){
            res.json({
                status: -3,
                message: "Not found the super depatment."
            });
        }
        let department = new Department({
            name: req.body.name,
            superDepartment: super_department._id,
            level: super_department.level + 1,
            marketing: req.body.marketing || false,
            delivered: req.body.delivered || false
        });
        department = await department.save();
        res.json({
            status: 0,
            message: 'create department succesed',
            data: department
        })
    } catch(err){
        res.json({
            status: -1,
            message: `create department failed: ${err.message}`
        })
    }
});

// 更新部门名称


module.exports = router;