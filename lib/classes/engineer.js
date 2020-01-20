const Employee = require("./employee")

class Engineer extends Employee {
    constructor(github){
        super(name, id, title);
        this.github = github;
    }
    getRole(){
        return "Engineer";
    }
    getGithub(){
        return this.github;
    }
}
github = ""
module.exports = Engineer;