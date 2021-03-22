const db = require('./db');

const sql = `
    create table if not exists contracts(
        contract_id varchar(50) not null primary key,
        contract_name varchar(100) not null,
        contract_department varchar(10) not null,
        business_id char(20),
        foreign key (business_id) references businesses(business_id)
    )ENGINE=InnoDB DEFAULT CHARSET=utf8;
`;

db.connect((err)=>{
    if(err){
        console.log(`连接数据库失败。\nError: ${err.message}`);
        return;
    }
    console.log('数据库连接成功。');
    db.query(sql, (err, result)=>{
        if(err){
            console.log(`创建数据表失败。\nError: ${err.message}`);
            return;
        }
        console.log('创建数据表成功。');
    });
    db.end()
});