const db = require('./db');

const sql = `
    create table if not exists businesses(
        business_id char(20) not null primary key,
        business_name varchar(100) not null,
        business_department varchar(10) not null,
        account_manager varchar(10) not null,
        phone char(11) not null,
        service_type tinyint unsigned not null,
        independent boolean not null default 0,
        description text
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