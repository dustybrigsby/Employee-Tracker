DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

-- create departments table --
CREATE TABLE
    department (
        id INT AUTO_INCREMENT UNSIGNED PRIMARY KEY,
        name VARCHAR(30) UNIQUE NOT NULL
    );

-- create roles table --
CREATE TABLE
    role (
        id INT AUTO_INCREMENT UNSIGNED PRIMARY KEY,
        title VARCHAR(30) UNIQUE NOT NULL,
        salary DECIMAL UNSIGNED NOT NULL,
        department_id INT UNSIGNED NOT NULL,
        FOREIGN KEY (department_id) REFERENCES department (id)
    );

-- create employees table --
CREATE TABLE
    employee (
        id INT AUTO_INCREMENT UNSIGNED PRIMARY KEY,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INT UNSIGNED NOT NULL,
        FOREIGN KEY (role_id) REFERENCES role (id),
        manager_id INT UNSIGNED,
        FOREIGN KEY (manager_id) REFERENCES employee (id)
    );