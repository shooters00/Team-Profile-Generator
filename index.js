const inquirer = require('inquirer');
const fs = require('fs');
const open = require('open');
//const htmlRenderer = require('html-renderer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team manager\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team manager\'s employee id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team manager\'s email address?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team manager\'s officeNumber?',
        },
    ])
    .then((data) => {
        console.log(data);
    });



    //<i class="fas fa-glasses"></i>
    //<i class="fas fa-mug-hot"></i>
    //<i class="fas fa-user-graduate"></i>
    //could assign a class per role
    //create a separate js to build the html for the roles
    //