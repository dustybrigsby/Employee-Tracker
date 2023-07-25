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
                    name: "Update Employee Role",
                    value: "updateEmployeeRole"
                },
            ]
        }
    ]);
}