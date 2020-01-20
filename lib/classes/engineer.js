const Employee = require("./lib/employee")

class Engineer extends Employee {
    constructor(github){
        super(name, id, title);
        this.github = github;
    }
    getRole(){
        return "Engineer";
    }
    getGithub(){
        // write function to return github repo for a certain employee
    }
}
github = ""
module.exports = Engineer;