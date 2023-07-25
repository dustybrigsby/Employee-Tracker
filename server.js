const { prompt } = require('inquirer');
const figlet = require('figlet');
const db = require('./db');
const { log } = require('console');

// Display ascii text art
figlet("Employee Manager", (err, data) => {
    if (err) {
        console.log("Something went wrong with Figlet...");
        console.dir(err);
        return;
    }
    console.log(data);
});

