const Employee = require("./lib/employee")

class Intern extends Employee {
    constructor(school){
        super(name, id, title);
        this.school = school;
        this.role = "Intern";
    }
    getRole(){
        return this.role;
    }
    getSchool(){
        //return the school of the Intern
    }
}
school = ``
module.exports = Intern;