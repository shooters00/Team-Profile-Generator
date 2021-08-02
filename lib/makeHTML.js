const teamArray = require('../index');
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");

const makeHTML = (teamArray) => {
    console.log('Made it to make HTML function');
    teamArray.forEach(element => {
        if (element instanceof Manager) {
            console.log("I'm a manager");
            console.log(
                `
                ${element.name}
                ${element.id}
                ${element.email}
                ${element.officeNumber}
                `
                );
            let icon = `<i class="fas fa-mug-hot"></i>`;
            let extraHTML = managerHTML;
            //console.log(employeeHTML + "\n" + baseHTML + "\n" + extraHTML);
        } else if (element instanceof Intern) {
            console.log("I'm an intern");
            let icon = `<i class="fas fa-user-graduate"></i>`;
            let extraHTML = internHTML;
            //console.log(employeeHTML + "\n" + baseHTML + "\n" + extraHTML);
        } else if (element instanceof Engineer) {
            console.log("I'm an engineer");
            let icon = `<i class="fas fa-glasses"></i>`;
            let extraHTML = engineerHTML;
            //console.log(employeeHTML + "\n" + baseHTML + "\n" + extraHTML);
        } else {
            console.log("There was an issue");
        }
    });
}

/*
const baseHTML = 
`<!DOCTYPE html>
    <html lang="en">
    
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
            <link rel="stylesheet" href="../css/style.css" />
            <title>Team Profile</title>
        </head>
    
        <body>
            <div class="navbar-brand">
                <h1 class="team">My Team<span id="team"></span></h1>
            </div>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    ${employeeHTML}
                                ${extraHTML}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    </html>
`
const employeeHTML = 
`                    <div class="card" style="width: 18rem;">
                        <div class="card header">
                            <h4 class="head"><span id="name">${element.name}</span></h5>
                            <h5 class="head"><span id="roleIcon">${icon} </span><span id="role">${element.role}</span></h5>
                        </div>
                        <div class=" card borderList">
                            <div class="list-group list-group-flush info">
                                <p class="list-group-item">ID: <span id="id">${element.id}</span></p>
                                <p class="list-group-item">Email: <span id="email"><a href="mailto:${element.email}" id="emailAddress" class="card-link">${element.email}</a></span></p>`

const managerHTML = `<p class="list-group-item">Office Number: <span id="officeNumber">${element.officeNumber}</span></p>`;

const internHTML = `<p class="list-group-item">School: <span id="school">${element.school}</span></p>`;

const engineerHTML = `<p class="list-group-item">Github: <span id="github"><a href="http://github.com/${element.github}" id="githubAccount" class="card-link">${element.github}</a></span></p>`;

*/

module.exports = makeHTML;

