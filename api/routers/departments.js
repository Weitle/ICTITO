const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// 创建 Department 模式和模型
const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    super_id: String,
    level: {
        type: Number,
        default: 0
    }
});

const Department = mongoose.model('Department', departmentSchema);


// 获取所有部门信息
router.get('/', async (req, res)=>{
    const departments = await Department.find().select({name:1, super_id: 1, level: 1});
    if(!departments)
        res.status(404).send('Not found any department.');
    res.send(departments);
});

// 获取指定部门信息
router.get('/:id', async (req, res)=>{
    const department = await Department.findById(req.params.id);
    if(!department){
        res.status(404).send("Not found the department.");
    }
    res.send(department);
});

// 获取某一层级部门信息
router.get('/level/:level', async (req, res)=>{
    const departments = await Department.find({level: req.params.level}).select({name:1, super_id: 1, level:1});
    if(!departments)
        res.status(404).send("Not found the departments.");
    res.send(departments);
});

// 创建一个新的部门
router.post('/new', async (req, res)=>{
    console.log(req.body);
    const super_id = req.body.super_id;
    const super_department = await Department.findById(super_id);
    if(!super_department){
        res.status(400).send("Not found the super depatment.");
    }
    const newDepartment = {
        name: req.body.name,
        super_id: super_id,
        level: super_department.level + 1
    }
    const department = await Department.create(newDepartment);
    if(!department)
        res.status(400).send("Create department failed.");
    res.send(department);
});

// 更新部门名称


module.exports = router;