const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '3025880k!',
  database: 'employees'
});

module.exports = connection;