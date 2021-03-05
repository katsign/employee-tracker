const inquirer = require("inquirer");
const mysql = require('mysql');

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

function start() {
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "VIEW All Departments",
      "VIEW All Roles",
      "VIEW All Employees",
      "ADD a Department",
      "ADD a Role",
      "ADD an Employee",
      "UPDATE Employee Role",
      "EXIT",
    ],
  }).then = (answer) => {
    if (answer.action === "VIEW All Departments") {
      viewDepartments();
    } else if (answer.action === "VIEW All Roles") {
      viewRoles();
    } else if (answer.action === "VIEW All Employees") {
      viewEmployees();
    } else if (answer.action === "ADD a Department") {
      addDepartment();
    } else if (answer.action === "ADD a Role") {
      addRole();
    } else if (answer.action === "ADD an Employee") {
      addEmployee();
    } else if (answer.action === "UPDATE Employee Role") {
      updateRole();
    } else if (answer.action === "EXIT") {
      console.log("Restart the application and try again.");
      connection.end();
    }
  };
}

// Below are all the possible Action functions to be called...
    // VIEW functions:
function viewDepartments() {
  var query = "SELECT * FROM department";
  connection.query(query, function (err, res) {
    console.log(`DEPARTMENTS:`);
    res.forEach((department) => {
      console.log(`ID: ${department.id} | Name: ${department.name}`);
    });
    start();
  });
}

function viewRoles() {
  var query = "SELECT * FROM role";
  connection.query(query, function (err, res) {
    console.log(`ROLES:`);
    res.forEach((role) => {
      console.log(
        `ID: ${role.id} | Title: ${role.title} | Salary: ${role.salary} | Department ID: ${role.department_id}`
      );
    });
    start();
  });
}

function viewEmployees() {
    var query = "SELECT * FROM employee";
        connection.query(query, function(err, res) {
            console.log(`EMPLOYEES:`)
        res.forEach(employee => {
            console.log(`ID: ${employee.id} | Name: ${employee.first_name} ${employee.last_name} | Role ID: ${employee.role_id} | Manager ID: ${employee.manager_id}`);
        })
        start();
        });
    };

    // ADD functions:
    function addDepartment() {
        inquirer
            .prompt({
                name: "department",
                type: "input",
                message: "What is the name of the new department?",
              })
            .then(function(answer) {
            var query = "INSERT INTO department (name) VALUES ( ? )";
            connection.query(query, answer.department, function(err, res) {
                console.log(`You have added this department: ${(answer.department).toUpperCase()}.`)
            })
            viewDepartments();
            })
    }