const mongoose = require('mongoose');
const {Ability} = require('../models/abilities');

// ict 7 大能力
const ict = [
  {code: "ZY-ICT-ZHBX", name: "综合布线"},
  {code: "ZY-ICT-WLSB", name: "网络设备部署"},
  {code: "ZY-ICT-ZDBS", name: "终端部署（含信创）"},
  {code: "ZY-ICT-JFGC", name: "机房工程"},
  {code: "ZY-ICT-SPHY", name: "视频会议部署"},
  {code: "ZY-ICT-SJKBS", name: "应用及数据库部署"},
  {code: "ZY-ICT-YQY", name: "云迁移"}
];

const ito = [
  {code: "ZY-ITO-SBWH", name: "网络设备维护"},
  {code: "ZY-ITO-JFWH", name: "机房维护"},
  {code: "ZY-ITO-ZDWH", name: "终端维护（含信创）"},
  {code: "ZY-ITO-RDWH", name: "弱电维护"},
  {code: "ZY-ITO-SPHY", name: "视频会议维护"},
  {code: "ZY-ITO-SJKWH", name: "应用及数据库维护"},
]

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

createAbilities(ito, 1, "ZY-ITO").then(()=>{
  console.log("create abilities successed");
  process.exit(0);
}).catch(err=>{
  console.log(`Error: ${err.message}`);
  process.exit(1);
});