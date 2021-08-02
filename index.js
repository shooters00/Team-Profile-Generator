const inquirer = require('inquirer');
const fs = require('fs');
const open = require('open');
//const htmlRenderer = require('html-renderer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const makeHTML = require('./lib/makeHTML');
const employeeQuestions = require('./lib/empQuest');
let managerQuestions = require('./lib/manQuest');
let internQuestions = require('./lib/intQuest');
let engineerQuestions = require('./lib/engQuest');
managerQuestions = employeeQuestions.concat(managerQuestions);
internQuestions = employeeQuestions.concat(internQuestions);
engineerQuestions = employeeQuestions.concat(engineerQuestions);
let teamArray = [];

const start = () => {
    inquirer
    .prompt(managerQuestions)
    .then((data) => {
        data.role = 'Manager';
        //teamArray.push(data);
        //console.log(teamArray);
        addToTeam(data);
        moreEmployees();
    })
    .catch((err) => console.log(err));
}

const moreEmployees = () => {
    inquirer
    .prompt(
        [
            {
                type: 'list',
                name: 'continue',
                message: 'Do you want to add more team members?',
                choices: ['Yes', 'No']
            }
        ]
    )
    .then((input) => {
        if (input.continue === 'Yes') {
            addMore();
        } else {
            module.exports = teamArray;
            makeHTML(teamArray);
        }
    })
    .catch((err) => console.log(err));
}

const addMore = () => {
    inquirer
    .prompt(
        [
            {
                type: 'list',
                name: 'whichOne',
                message: 'Do you want to add an Engineer or an Intern?',
                choices: ['Engineer', 'Intern']
            }
        ]
    )
    .then((choice) => {
        if (choice.whichOne === 'Engineer') {
            addEngineer();
        } else {
            addIntern();
        }
    })
    .catch((err) => console.log(err));
}

const addEngineer = () => {
    console.log('Made it to add Engineer function');
    inquirer
    .prompt(engineerQuestions)
    .then((data) => {
        data.role = 'Engineer';
        //teamArray.push(data);
        //console.log(teamArray);
        addToTeam(data);
        moreEmployees();
    })
    .catch((err) => console.log(err));
}

const addIntern = () => {
    console.log('Made it to add Intern function');
    inquirer
    .prompt(internQuestions)
    .then((data) => {
        data.role='Intern';
        //teamArray.push(data);
        //console.log(teamArray);
        addToTeam(data);
        moreEmployees();
    })
    .catch((err) => console.log(err));
}

const addToTeam = ({ role, name, id, email, officeNumber, github, school}) => {
    let teamMember;
    //console.log(`role: ${role}`);
    switch(role) {
        case 'Manager':
            teamMember = new Manager(name, id, email, officeNumber);
            break;
        case 'Intern':
            teamMember = new Intern(name, id, email, school);
            break;
        case 'Engineer':
            teamMember = new Engineer(name, id, email, github);
            break;
        default:
            //module.exports = teamArray;
            //makeHTML(teamArray);
            //return;
    }
    console.log('Team Member:');
    console.log(teamMember);
    teamArray.push(teamMember);
    console.log('Team Array');
    console.log(teamArray);
}

/*
const makeHTML = () => {
    console.log('Made it to make HTML function');
    
}
*/

console.log("Starting...");
start();



    /*
    const filename = "README.md";
    fs.writeFile(filename, index, (err) => {
      err ? console.log(err) : console.log('Success!')
      open('README.md', { "wait": true });
    }
    );
    */

