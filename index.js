const connection = require('./src/connection');
const inquirer = require('inquirer');

function start() {
    inquirer
      .prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
          'VIEW All Departments',
          'VIEW All Roles',
          'VIEW All Employees',
          'ADD a Department',
          'ADD a Role',
          'ADD an Employee',
          'UPDATE Employee Role',
          'EXIT'
        ]
      })
    .then = (answer) => {
        if (answer.action === 'VIEW All Departments') {
            viewDepartments();
        } else if (answer.action === 'VIEW All Roles') {
            viewRoles();
        } else if (answer.action === 'VIEW All Employees') {
            viewEmployees();
        } else if (answer.action === 'ADD a Department') {
            addDepartment();
        } else if (answer.action === 'ADD a Role') {
            addRole();
        } else if (answer.action === 'ADD an Employee') {
            addEmployee();
        } else if (answer.action === 'UPDATE Employee Role') {
            updateRole();
        }
        else if (answer.action === 'EXIT') {
            console.log('Restart the application and try again.')
            connection.end();
        }
    }
    }

