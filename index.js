const Employee = require("./lib/classes/employee.js");
const Manager = require("./lib/classes/manager.js");
const Engineer = require("./lib/classes/engineer.js");
const Intern = require("./lib/classes/intern.js")
const jest = require("jest");
const inquirer = require("inquirer");
const fs = require("fs");

const i = 0;
const managerList = [];
const engineerList = [];
const internList = [];


function run (){
inquirer.prompt([{
        type: "list",
        name: "Job Title",
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
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
        type: "input",
        name: "email",
        message: "What is the employees email address?"
    }
])
    .then(answers => {
        const employee = new Employee (answers["employee name"], answers["id"], answers["Job Title"], answers["email"]);
        // console.log(employee);

        if(answers["Job Title"]==="Manager"){
            inquirer.prompt([{
                type: "input",
                name: "Office Number",
                message: "What is this managers's office number?"
            },
            ]).then(answers => {
                const manager = new Manager (answers["Office Number"]);
                manager.name = employee.name;
                manager.id = employee.id;
                manager.title = "Manager";
                manager.email = employee.email;
                if(managerList.length > 0){
                    console.log("Too Many Managers Employee Not Added");
                    inquirer.prompt([{
                        type: "confirm",
                        name: "recall",
                        message: "Do you want to add another employee?"
                    }])
                            .then(answer => {
                                if(answer === false){
                                    createHTML();
                                }else{
                                    run();
                                }
                            })
                }else{
                    managerList.push(manager);
                    console.log(managerList);
                    inquirer.prompt([{
                        type: "confirm",
                        name: "recall",
                        message: "Do you want to add another employee?"
                    }])
                            .then(answer => {
                                if(answer.recall === false){
                                    createHTML();
                                }else{
                                    run();
                                }
                            })
                }                
            })
        }else if(answers["Job Title"]==="Engineer"){
            inquirer.prompt([{
                type: "input",
                name: "GitHub",
                message: "What is this engineer's GitHub Username?"
            }
            ]).then(answers => {
                const engineer = new Engineer (answers["GitHub"]);
                engineer.name = employee.name;
                engineer.id = employee.id;
                engineer.title = "Engineer"
                engineer.email = employee.email
                engineer.giturl = `https://github.com/${engineer.github}/`
                engineerList.push(engineer)
                if(engineerList){
                inquirer.prompt([{
                    type: "confirm",
                    name: "recall",
                    message: "Do you want to add another employee?"
                }])
                        .then(answer => {
                            if(answer.recall === false){
                                createHTML();
                            }else{
                                run();
                            }
                        })
                }
            })
        }else if(answers["Job Title"]==="Intern"){
            inquirer.prompt([{
                type: "input",
                name: "school",
                message: "What is this interns school of origin?"
            }
            ]).then(answers => {
                const intern = new Intern (answers["school"]);
                intern.name = employee.name;
                intern.id = employee.id;
                intern.title = "Intern"
                intern.email = employee.email;
                internList.push(intern);
                if(internList){
                inquirer.prompt([{
                    type: "confirm",
                    name: "recall",
                    message: "Do you want to add another employee?"
                }])
                        .then(answer => {
                            if(answer.recall === false){
                                createHTML();
                            }else{
                                run();
                            }
                        })
                }
            })
        }else{
            console.log("error")
        }
    })
}
run();

// function constManager(employee){
//         inquirer.prompt([{
//             type: "input",
//             name: "Office Number",
//             message: "What is this managers's office number?"
//         },
//         ]).then(answers => {
//             const manager = new Manager (answers["Office Number"]);
//             manager.name = employee.name;
//             manager.id = employee.id;
//             manager.title = "Manager"
//             manager.email = employee.email;
//             // console.log(manager);
//             return manager;
//         })
//         };
// function constEngineer(employee){
//         inquirer.prompt([{
//             type: "input",
//             name: "GitHub",
//             message: "What is this engineer's GitHub Username?"
//         }
//         ]).then(answers => {
//             const engineer = new Engineer (answers["GitHub"]);
//             engineer.name = employee.name;
//             engineer.id = employee.id;
//             engineer.title = "Engineer"
//             engineer.email = employee.email;
//             // console.log(engineer);
//             return engineer;
//         })
//     };
// function constIntern(employee){
//         inquirer.prompt([{
//             type: "input",
//             name: "school",
//             message: "What is this interns school of origin?"
//         }
//         ]).then(answers => {
//             const intern = new Intern (answers["school"]);
//             intern.name = employee.name;
//             intern.id = employee.id;
//             intern.title = "Intern"
//             intern.email = employee.email;
//             // console.log(intern);
//             return intern;
//         })
//     };

// function cardIntern(intern){

// }
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

function createHTML(){
        let html1 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <div id="start"></div>`

        for (let i = 0 ; i < managerList.length ; i++){
            let managerHTML = `<div class="card" style="width: 100%;">
            <div class="card-header" id="title">${managerList[i].title}</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" id="name">Name: ${managerList[i].name}</li>
              <li class="list-group-item" id="id">ID: ${managerList[i].id}</li>
              <li class="list-group-item" id="email">Email: ${managerList[i].email}</li>
              <li class="list-group-item" id="officeNumber">Office Number: ${managerList[i].officeNumber}</li>
            </ul>
          </div>`
        html1 = html1 + managerHTML
        }
        for(let i = 0 ; i < engineerList.length ; i++){
            let engineerHTML = `<div class="card" style="width: 100%;">
            <div class="card-header" id="title">${engineerList[i].title}</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" id="name">Name: ${engineerList[i].name}</li>
              <li class="list-group-item" id="id">ID: ${engineerList[i].id}</li>
              <li class="list-group-item" id="email">Email: ${engineerList[i].email}</li>
              <li class="list-group-item" id="github">Github: <a href="${engineerList[i].giturl}">${engineerList[i].github}</a></li>
            </ul>
        </div>`
        html1 = html1 + engineerHTML
        }
        for(let i = 0 ; i < internList.length ; i++){
            let internHTML = `<div class="card" style="width: 100%;">
            <div class="card-header" id="title">${internList[i].title}</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" id="name">Name: ${internList[i].name}</li>
              <li class="list-group-item" id="id">ID: ${internList[i].id}</li>
              <li class="list-group-item" id="email">Email: ${internList[i].email}</li>
              <li class="list-group-item" id="officeNumber">School: ${internList[i].school}</li>
            </ul>
          </div>`
        html1 = html1 + internHTML
        }
        htmll = html1 + `<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        </body>
        </html>`
        inquirer.prompt([{
            type: "confirm",
            name: "html",
            message: "Want to create the web profile for the team?"
        }]).then( answer => {
            if(answer){
                fs.writeFile('./output/index.html', html1, (err) => {
                    if (err) throw err;
                    console.log('The file has been saved!');
                  });
            }else{
                console.log("AYAYAY Our Time Is Wasted")
            }
        })
    }