const Employee = require("./lib/classes/employee.js");
const Manager = require("./lib/classes/manager.js");
const Engineer = require("./lib/classes/engineer.js");
const Intern = require("./lib/classes/intern.js")
const jest = require("jest");
const inquirer = require("inquirer");


const i = 0;


inquirer.prompt([{
        type: "input",
        name: "employee name",
        message: "What is the employees name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the employees ID number?"
    },
    {
        type: "list",
        name: "Job Title",
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
        type: "input",
        name: "email",
        message: "What is the employees email address?"
    }
])
    .then(answers => {
        var employee = new Employee (answers["employee name"], answers["id"], answers["Job Title"], answers["email"]);
        // console.log(employee);
        if(answers["Job Title"]==="Manager"){
            const final = constManager(employee);
                return final
        }else if(answers["Job Title"]==="Engineer"){
            const final = constEngineer(employee);
            return final
        }else if(answers["Job Title"]==="Intern"){
            const final = constIntern(employee);
                return final
        }else{
            console.log("error")
        }
    }).then(final=>{console.log(final)})

function constManager(employee){
        inquirer.prompt([{
            type: "input",
            name: "Office Number",
            message: "What is this managers's office number?"
        }])
        .then(answers => {
            const manager = new Manager (answers["Office Number"]);
            manager.name = employee.name;
            manager.id = employee.id;
            manager.title = "Manager"
            manager.email = employee.email;
            console.log(manager);
            return manager;
        })
    }
function constEngineer(employee){
        inquirer.prompt([{
            type: "input",
            name: "GitHub",
            message: "What is this engineer's GitHub Username?"
        }])
        .then(answers => {
            const engineer = new Engineer (answers["GitHub"]);
            engineer.name = employee.name;
            engineer.id = employee.id;
            engineer.title = "Engineer"
            engineer.email = employee.email;
            console.log(engineer);
            return engineer;
        })
    }
function constIntern(employee){
        inquirer.prompt([{
            type: "input",
            name: "school",
            message: "What is this interns school of origin?"
        }])
        .then(answers => {
            const intern = new Intern (answers["school"]);
            intern.name = employee.name;
            intern.id = employee.id;
            intern.title = "Intern"
            intern.email = employee.email;
            console.log(intern);
            return intern;
        })
    }
    // .prompt([{
    //     type: "list",
    //     name: "Job Title",
    //     choices: ["Manager", "Engineer", "Intern"]
    //     }
    // ])
    // .then(answers => if(answers["Job Title"]==="Manager"){
    //     inquirer
    //     .prompt([{
    //         type: "input",
    //         name: "Office Number",
    //         message: "What is your office number?"
    //     }])
    //     .then(answers => )
    // })