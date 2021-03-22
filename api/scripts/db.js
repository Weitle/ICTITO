const mysql = require('mysql');
const dbhost = process.env.ICTITO_DBHOST || 'localhost';
const dbuser = process.env.ICTITO_DBUSER || 'root';
const dbpassword = process.env.ICTITO_DBPASSWORD || '';
const dbname = process.env.ICTITO_DBNAME || 'ict';

const connection = mysql.createConnection({
    host: dbhost,
    user: dbuser,
    password: dbpassword,
    database: dbname
});

module.exports = connection;