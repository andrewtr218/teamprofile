const Employee = require("./employee")

class Manager extends Employee {
    constructor(officeNumber){
        super(name, id, title, email);
        this.officeNumber = officeNumber;
        this.role = "Manager"
    }
    getRole(){
        return this.role;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}
officeNumber=''
module.exports = Manager;