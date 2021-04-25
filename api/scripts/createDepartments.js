const mongoose = require('mongoose');
const {Department} = require('../models/departments');

const level1 = [
  {name: '本部', marketing: false, delivered: false},
  {name: '中心', marketing: false, delivered: false},
  {name: '分公司', marketing: false, delivered: false}
];

const level2_1 = [
  // 本部
  {name: '网络部', marketing: false, delivered: false},
  {name: '政企客户事业部', marketing: false, delivered: false},
  {name: '财务部', marketing: false, delivered: false},
  {name: '人力资源部', marketing: false, delivered: false}
];

const level2_2 = [
  // 中心
  {name: '交付中心', marketing: false, delivered: true},
  {name: '云网建设中心', marketing: false, delivered: true},
  {name: '云网运营中心', marketing: false, delivered: true},
  {name: '管线运营中心', marketing: false, delivered: true},
  {name: '网络优化中心', marketing: false, delivered: true},
  {name: '机动通信局', marketing: false, delivered: true},
  {name: '大客户中心', marketing: true, delivered: false},
  {name: '产业互联网研究院', marketing: true, delivered: true}
];

const level2_3 = [
  // 分公司
  {name: '和平分公司', marketing: true, delivered: true},
  {name: '河东分公司', marketing: true, delivered: true},
  {name: '南开分公司', marketing: true, delivered: true},
  {name: '河北分公司', marketing: true, delivered: true},
  {name: '红桥分公司', marketing: true, delivered: true},
  {name: '河西分公司', marketing: true, delivered: true},
  {name: '西青分公司', marketing: true, delivered: true},
  {name: '塘沽分公司', marketing: true, delivered: true},
  {name: '东丽分公司', marketing: true, delivered: true},
  {name: '津南分公司', marketing: true, delivered: true},
  {name: '北辰分公司', marketing: true, delivered: true},
  {name: '汉沽分公司', marketing: true, delivered: true},
  {name: '大港分公司', marketing: true, delivered: true},
  {name: '蓟州分公司', marketing: true, delivered: true},
  {name: '宝坻分公司', marketing: true, delivered: true},
  {name: '武清分公司', marketing: true, delivered: true},
  {name: '静海分公司', marketing: true, delivered: true},
  {name: '宁河分公司', marketing: true, delivered: true}
];

const jiaofu = [
  {name: '管理层', marketing: false, delivered: false},
  {name: '政企交付部', marketing: false, delivered: true},
  {name: '平台交付部', marketing: false, delivered: true},
  {name: '交付中控部', marketing: false, delivered: true},
  {name: 'IDC值守单元', marketing: false, delivered: true},
  {name: '云平台业务单元', marketing: false, delivered: true},
  {name: '交付中控单元', marketing: false, delivered: true},
  {name: '政企交付第一单元', marketing: false, delivered: true},
  {name: '政企交付第二单元', marketing: false, delivered: true},
  {name: '视频业务单元', marketing: false, delivered: true}
];
const jianshe = [
  {name: '管理层', marketing: false, delivered: false},
  {name: '政企建设单元', marketing: false, delivered: false}
];

const fengoongsi1 = [
  {name: '管理层', marketing: false, delivered: false},
  {name: '政企客户事业部', marketing: true, delivered: false},
  {name: '网络部', marketing: false, delivered: true},
  {name: '政企响应中心', marketing: false, delivered: true},
  {name: '第一设备维护中心', marketing: false, delivered: true},
  {name: '第二设备维护中心', marketing: false, delivered: true},
  {name: '移动维优中心', marketing: false, delivered: true},
  {name: '线路维护中心', marketing: false, delivered: true}
];
const fengoongsi2 = [
  {name: '管理层', marketing: false, delivered: false},
  {name: '政企客户事业部', marketing: true, delivered: false},
  {name: '网络部', marketing: false, delivered: true},
  {name: '政企响应中心', marketing: false, delivered: true},
  {name: '第一设备维护中心', marketing: false, delivered: true},
  {name: '第二设备维护中心', marketing: false, delivered: true},
  {name: '移动维优中心', marketing: false, delivered: true},
  {name: '线路维护中心', marketing: false, delivered: true}
];


async function createDepartments(departments, superLevel, superName){
  const superDepartment = await Department.findOne({level: superLevel, name: superName});
  if(!superDepartment){
    console.log('find super department failed.');
    return;
  }
  departments.map(department=>{
    department['superDepartment'] = superDepartment._id;
    department['level'] = superLevel + 1;
  });

  return await Department.insertMany(departments);
}


mongoose.connect("mongodb://localhost/ict").then(()=>{
  console.log('connect to database...');
}).catch(err=>{
  console.log('connect to database failed...');
});
createDepartments(level2_3, 1, '分公司').then(()=>{
  console.log('inset departments successed.')
}).catch(err=>{
  console.log('insert departments failed: ${err.message}');
});