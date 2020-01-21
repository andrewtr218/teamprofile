const Employee = require("./employee")

class Engineer extends Employee {
    constructor(github){
        super(name, id, title);
        this.github = github;
        this.role = "Engineer"
    }
    getRole(){
        return this.role;
    }
    getGithub(){
        return this.github;
    }
}
github=""
module.exports = Engineer;