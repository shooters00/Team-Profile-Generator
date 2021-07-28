const inquirer = require('inquirer');
const fs = require('fs');
const open = require('open');
const open = require('html-renderer');
const Letter = require('lib/Employee');
const Letter = require('lib/Engineer');
const Letter = require('lib/Intern');
const Letter = require('lib/Manager');

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


