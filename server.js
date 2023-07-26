const figlet = require("figlet");
const inquirer = require("inquirer");
const db = require("./db");


function init() {
    // console.log("Run splashAscii()");
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
    // console.log("Run getUserChoice()");

    try {
        const choice = await inquirer.prompt(choices);
        // console.log("choice:", choice.choice);

        switch (choice.choice) {
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
    db.viewEmployees()
        .then(([employees]) => {
            console.log("\n");
            console.table(employees);
        })
        .then(() => getUserChoice());
};

// Add an employee
function addEmployee() {
    // get new first and last names
    inquirer.prompt([
        {
            name: "first_name",
            message: "What is the new employee's first name?"
        },
        {
            name: "last_name",
            message: "What is the new employee's last name?"
        }
    ])
        .then((res) => {
            // save names
            const firstName = res.first_name;
            const lastName = res.last_name;

            // get all roles for role prompt options
            db.viewRoles()
                .then(([roles]) => {
                    const roleOptions = roles.map(({ id, title }) => ({
                        name: title,
                        value: id
                    }));
                    // get new role
                    inquirer.prompt({
                        type: "list",
                        name: "newRole",
                        message: "What is the new employee's role?",
                        choices: roleOptions
                    })
                        .then((res) => {
                            // save role
                            let newRole = res.newRole;

                            // get employees for manager prompt options
                            db.viewEmployees()
                                .then(([managers]) => {
                                    // save managers as array
                                    const managerOptions = managers.map(({ id, first_name, last_name }) => ({
                                        name: `${first_name} ${last_name}`,
                                        value: id
                                    }));

                                    managerOptions.unshift({ name: "None", value: null });

                                    // get new manager
                                    inquirer.prompt({
                                        type: "list",
                                        name: "newManager",
                                        message: "Who is the new employee's manager?",
                                        choices: managerOptions
                                    })
                                        .then((res) => {
                                            // compile new employee info
                                            const newEmployee = {
                                                first_name: firstName,
                                                last_name: lastName,
                                                role_id: newRole,
                                                manager_id: res.newManager
                                            };
                                            // db.function to add new employee to employees_db
                                            db.addEmployee(newEmployee);
                                        })
                                        .then(() => {
                                            console.log("\n");
                                            console.log(`${firstName} ${lastName} added to the database.`);
                                        })
                                        .then(() => viewEmployees());
                                });
                        });
                });


        });
};

// Update an employee's role
function updateEmployeeRole() {
    db.updateEmployeeRole()
        .then(() => {

        })
        .then(() => getUserChoice());
};

// View all roles
function viewRoles() {
    db.viewRoles()
        .then(([roles]) => {
            console.log("\n");
            console.table(roles);
        })
        .then(() => getUserChoice());
};

// Add a role
function addRole() {
    db.addRole()
        .then(() => {

        })
        .then(() => getUserChoice());
};

// View all departments
function viewDepartments() {
    db.viewDepartments()
        .then(([departments]) => {
            console.log("\n");
            console.table(departments);
        })
        .then(() => getUserChoice());
};

// Add a department
function addDepartment() {
    db.addDepartment()
        .then(() => {

        })
        .then(() => getUserChoice());
};



init();
