class Employee {
    constructor(name, id, title, email) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email
        this.role = "Employee"
      }
      getName(){
        return this.name;
      }
      getID(){
        return this.id
      }
      getEmail(){
        return this.email
      }
      getRole(){
        return this.role
      }
}

name = ""
id = ''
title = ``
email = ""
role = ''

module.exports = Employee