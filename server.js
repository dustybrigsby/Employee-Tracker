const { prompt } = require("inquirer");
const figlet = require("figlet");
const db = require("./db");

// Display ascii text art
figlet("Employee Manager", (err, data) => {
    if (err) {
        console.log("Something went wrong with Figlet...");
        console.dir(err);
        return;
    }
    console.log(data);
});

function startPrompts() {
    prompt([
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
    ])
        .then((res) => {
            let choice = res.choice;

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
        });
}

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


startPrompts();