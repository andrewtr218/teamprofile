const Employee = require("./employee")

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
        return this.school;
    }
}
school = ``
module.exports = Intern;