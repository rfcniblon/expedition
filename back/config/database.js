const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '23Maxtor23$',
    database: 'expedition'
});
module.exports = connection;