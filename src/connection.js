const mysql = require('mysql');
const inquirer = require('inquirer');

var connection = mysql.createConnection({
    multipleStatements: true, 
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '3025880k!',
    database: 'employee_db'
  });

  
  connection.connect(function(err) {
    if (err) throw err;
    console.log(`You're tapped in at connection ID ${connection.threadId}\n`);
    start();
  });