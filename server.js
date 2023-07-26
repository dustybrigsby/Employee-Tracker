const figlet = require("figlet");
const inquirer = require("inquirer");
const db = require("./db");
const connection = require("./db/connection");



// Display ascii text art
function init() {
    console.log("Run splashAscii()");
    figlet("Employee Manager", (err, data) => {
        if (err) {
            console.log("Something went wrong with Figlet...");
            console.dir(err);
            return;
        }
        console.log(data);
        getUserChoice();
    });
}



const choices = [
    {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
            {
                name: "View All Employees",
                value: "viewEmployees"
            },
            {
                name: "Add Employee",
                value: "addEmployee"
            },
            {
                name: "Update Employee Role",
                value: "updateEmployeeRole"
            },
            {
                name: "View All Roles",
                value: "viewRoles"
            },
            {
                name: "Add Role",
                value: "addRole"
            },
            {
                name: "View All Departments",
                value: "viewDepartments"
            },
            {
                name: "Add Department",
                value: "addDepartment"
            },
            {
                name: "Quit",
                value: "quit"
            }
        ]
    }
];

async function getUserChoice() {
    console.log("Run getUserChoice()");

    try {
        const choice = await inquirer.prompt(choices);
        console.log("choice:", choice);

        switch (choice) {
            case "viewEmployees":
                viewEmployees();
                break;
            case "addEmployee":
                addEmployee();
                break;
            case "updateEmployeeRole":
                updateEmployeeRole();
                break;
            case "viewRoles":
                viewRoles();
                break;
            case "addRole":
                addRole();
                break;
            case "viewDepartments":
                viewDepartments();
                break;
            case "addDepartment":
                addDepartment();
                break;
            default:
                console.log("Now exiting the Employee Manager, goodbye!");
                process.exit();
        }

    } catch (err) {
        console.error("Error:", err);
    }
};

// View all employees
function viewEmployees() {

};

// Add an employee
function addEmployee() {

};

// Update an employee's role
function updateEmployeeRole() {

};

// View all roles
function viewRoles() {

};

// Add a role
function addRole() {

};

// View all departments
function viewDepartments() {

};

// Add a department
function addDepartment() {

};



init();
