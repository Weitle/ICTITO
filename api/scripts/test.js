const db = require('./db');

db.connect();

db.query('select 1+1 as solution', (err, rows, fields)=>{
    if(err){
        console.log('Error: ', err.message);
        return;
    }
    console.log(`The solution is ${rows[0].solution}`);
});

db.end();