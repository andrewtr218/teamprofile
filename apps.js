const Employee = require("./lib/classes/employee");
const Manager = require("./lib/classes/manager");
const Engineer = require("./lib/classes/engineer");
const Intern = require(".lib/classes/intern")
const jest = require("jest");
const inquirer = require("inquirer");

const employee = new Employee("",0,'');
const manager = new Manager(0);
const engineer = new Engineer("");
const intern = new Intern("");

const i = 0


inquirer
    .prompt([{
        type: "list",
        name: "Job Title",
        choice: ["Manager", "Engineer", "Intern"]
        }
    ])
    .then(answers => console.log(answers))