const connection = require("./config/connection");
const inquirer = require("inquirer");
const cTable = require("console.table");
const Chalk = require("chalk");
prompt = inquirer.createPromptModule();

connection.connect((error) => {
  if (error) throw error;
});

prompt([
  {
      type: 'list',
      message: `${Chalk.black.bgCyan(
          'Welcome to Employee Tracker. Select continue to begin.'
      )}`,
      choices: ['Continue', 'Quit'],
      name: 'start',
  },
]).then((response) => {
  switch (response.start) {
      case 'Continue':
          menu();
          break;
      case 'Quit':
          return console.log('Restart the application and try again.');
  }
});

function menu() {
  prompt([
    {
      name: "choices",
      type: "list",
      message: `${Chalk.black.bgGreen(
        "Which action would you like to perform?"
      )}`,
      choices: [
        "View All Employees",
        "View All Roles",
        "View All Departments",
        "Update Employee Role",
        "Add Employee",
        "Add Role",
        "Add Department",
        "Exit",
      ],
    },
  ]).then((answers) => {
    const { choices } = answers;
    if (choices === "View All Employees") {
      viewAllEmployees();
    }
    if (choices === "View All Roles") {
      viewAllRoles();
    }
    if (choices === "View All Departments") {
      viewAllDepartments();
    }
    if (choices === "Update Employee Role") {
      updateEmployeeRole();
    }
    if (choices === "Add Employee") {
      addEmployee();
    }
    if (choices === "Add Role") {
      addRole();
    }
    if (choices === "Add Department") {
      addDepartment();
    }
    if (choices === "Exit") {
      console.log("Restart the application and try again.");
      connection.end();
    }
  });
  }

// VIEW actions...
const viewAllEmployees = () => {
  let sql = `SELECT employee.id, 
              employee.first_name, 
              employee.last_name, 
              role.title, 
              department.department_name AS 'department', 
              role.salary
              FROM employee, role, department 
              WHERE department.id = role.department_id 
              AND role.id = employee.role_id
              ORDER BY employee.id ASC`;
  connection.query(sql, (error, response) => {
    if (error) throw error;
    console.log('------------------------------------------------------------------')
    console.log(`${Chalk.greenBright(
      "All Employees:\n"
    )}`)
    console.table(response);
    console.log('------------------------------------------------------------------')
    menu();
  });
};

const viewAllRoles = () => {
  let sql = `SELECT role.id, role.title, department.department_name AS department
  FROM role
  INNER JOIN department ON role.department_id = department.id`;
  connection.query(sql, (error, response) => {
    if (error) throw error;
    console.log('------------------------------------------------------------------')
    console.log(`${Chalk.greenBright(
      "List of Roles:\n"
    )}`)
    response.forEach((role) => {console.log(role.title);});
    console.log('------------------------------------------------------------------')
    menu();
  });
};

const viewAllDepartments = () => {
  let sql = `SELECT department.id AS id, department.department_name AS department FROM department`;
  connection.query(sql, (error, response) => {
    if (error) throw error;
    console.log('------------------------------------------------------------------')
    console.log(`${Chalk.greenBright(
      "List of Departments:\n"
    )}`)
    console.table(response);
    console.log('------------------------------------------------------------------')
    menu();
  });
};
