const connection = require("./config/connection");
const inquirer = require("inquirer");
const cTable = require("console.table");
const chalk = require("chalk");

connection.connect((error) => {
  if (error) throw error;
  console.log(
    chalk.Cyan.bold(`Welcome to Employee Tracker. Choose an action to begin.`)
  );
  console.log(
    chalk.black.bgCyan(
      `====================================================================================`
    )
  );
  promptUser();
});

// Prompt User for Choices
const promptUser = () => {
  inquirer
    .prompt([
      {
        name: "choices",
        type: "list",
        message: "Which action would you like to perform?",
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
    ])
    .then((answers) => {
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
        connection.end();
      }
    });
};
