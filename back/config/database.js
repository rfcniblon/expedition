const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'B2oba@92izi',
    database: 'expedition'
});
module.exports = connection;