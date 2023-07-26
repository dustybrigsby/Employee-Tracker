const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    // DB Methods
    // View all employees
    viewEmployees() {
        return this.connection.promise().query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name,' ',manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id;"
        );
    }

    // Add an employee
    addEmployee(employee) {
        return this.connection.promise().query("INSERT INTO employee SET ?", employee);
    }

    // Update an employee's role
    updateEmployeeRole() {
        return;
    }

    // View all roles
    viewRoles() {
        return this.connection.promise().query(
            "SELECT role.id, role.title, department.name, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;"
        );
    }

    // Add a role
    addRole(role) {
        return this.connection.promise().query("INSERT INTO role SET ?", role);
    }

    // View all departments
    viewDepartments() {
        return this.connection.promise().query(
            "SELECT * FROM department;"
        );
    }

    // Add a department
    addDepartment(department) {
        return this.connection.promise().query("INSERT INTO department SET ?", department);
    }
}

module.exports = new DB(connection);
