const mongoose = require('mongoose');
const {Ability} = require('../models/abilities');

// ict 7 大能力
const ict = [
  {code: "ZY-ICT-01", name: "综合布线"},
  {code: "ZY-ICT-02", name: "网络设备部署"},
  {code: "ZY-ICT-03", name: "终端部署（含信创）"},
  {code: "ZY-ICT-05", name: "机房工程"},
  {code: "ZY-ICT-04", name: "视频会议部署"},
  {code: "ZY-ICT-06", name: "平台及数据库部署"},
  {code: "ZY-ICT-07", name: "云迁移"}
];

const ito = [
  {code: "ZY-ITO-01", name: "网络设备维护"},
  {code: "ZY-ITO-02", name: "机房维护"},
  {code: "ZY-ITO-03", name: "终端维护（含信创）"},
  {code: "ZY-ITO-04", name: "弱电维护"},
  {code: "ZY-ITO-05", name: "视频会议维护"},
  {code: "ZY-ITO-06", name: "平台及数据库维护"}
];

// 综合布线
const ict01 = [
  {code: "ZY-ICT-01-01", name: "弱电（网线、电话线、音视频线等）"},
  {code: "ZY-ICT-01-01", name: "光缆光纤"}
];
const ict02 = [
  {code: "ZY-ICT-02-01", name: "安全设备"},
  {code: "ZY-ICT-02-02", name: "路由器交换机"},
  {code: "ZY-ICT-02-03", name: "视频监控"},
  {code: "ZY-ICT-02-04", name: "WIFI组网"},
  {code: "ZY-ICT-02-05", name: "服务器"}
];
const ict03 = [
  {code: "ZY-ICT-03-01", name: "标准产品"},
  {code: "ZY-ICT-03-02", name: "办公设备"},
  {code: "ZY-ICT-03-03", name: "电脑终端"}
];
const ict04 = [
  {code: "ZY-ICT-04-01", name: "专线视频会议"},
  {code: "ZY-ICT-04-02", name: "互联网视频会议"}
];
const ict05 = [
  {code: "ZY-ICT-05-01", name: "动环监控安装"},
  {code: "ZY-ICT-05-02", name: "机柜安装"}
];
const ict06 = [
  {code: "ZY-ICT-06-01", name: "服务器操作系统"},
  {code: "ZY-ICT-06-02", name: "中间件"},
  {code: "ZY-ICT-06-03", name: "数据库"}
];
const ict07 = [
  {code: "ZY-ICT-07-01", name: "云迁移"}
];

// ITO
const ito04 = [
  {code: "ZY-ITO-04-01", name: "弱电（网线、电话线、音视频线等）"},
  {code: "ZY-ITO-04-01", name: "光缆光纤"}
];
const ito02 = [
  {code: "ZY-ITO-02-01", name: "安全设备"},
  {code: "ZY-ITO-02-02", name: "路由器交换机"},
  {code: "ZY-ITO-02-03", name: "视频监控"},
  {code: "ZY-ITO-02-04", name: "WIFI组网"},
  {code: "ZY-ITO-02-05", name: "服务器"}
];
const ito03 = [
  {code: "ZY-ITO-03-01", name: "标准产品"},
  {code: "ZY-ITO-03-02", name: "办公设备"},
  {code: "ZY-ITO-03-03", name: "电脑终端"}
];
const ito05 = [
  {code: "ZY-ITO-05-01", name: "专线视频会议"},
  {code: "ZY-ITO-05-02", name: "互联网视频会议"}
];
const ito01 = [
  {code: "ZY-ITO-01-01", name: "动环设备"},
  {code: "ZY-ITO-01-02", name: "动环监控"},
  {code: "ZY-ITO-01-03", name: "空调"},
  {code: "ZY-ITO-01-04", name: "机柜及设备搬迁"},
  {code: "ZY-ITO-01-05", name: "线缆整治"}
];
const ito06 = [
  {code: "ZY-ITO-06-01", name: "服务器操作系统"},
  {code: "ZY-ITO-06-02", name: "中间件"},
  {code: "ZY-ITO-06-03", name: "数据库"}
];


async function createAbilities(abilities, superLevel, superCode){
  const superAbility = await Ability.findOne({level: superLevel, code: superCode});
  if(!superAbility){
    console.log('find super ability failed.');
    return;
  }
  abilities.map(ability=>{
    ability['superAbility'] = superAbility._id;
    ability['level'] = superLevel + 1;
  });

  return await Ability.insertMany(abilities);
}


mongoose.connect("mongodb://localhost/ict").then(()=>{
  console.log('connect to database...');
}).catch(err=>{
  console.log('connect to database failed...');
});


createAbilities(ito06, 2, "ZY-ITO-06").then(()=>{
  console.log("create abilities successed");
  process.exit(0);
}).catch(err=>{
  console.log(`Error: ${err.message}`);
  process.exit(1);
});