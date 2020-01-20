const Employee = require("../lib/classes/employee")

describe("Employee class", () => {
    describe("getName method", () => {
        it("returns the name on a card", () => {
            const test = new Employee ("Cool", 1, "Employ", "cool@gmail.com")  
            expect(test.getName()).toBe("Cool");
        })
    })
    describe("getID method", () => {
        it("returns the id on a card", () => {
        const test = new Employee ("Cool", 1, "Employ", "cool@gmail.com")  
            expect(test.getID()).toBe(1);
        })
    })
    describe("getEmail method", () => {
        it("returns the Email on a card", () => {
            const test = new Employee ("Cool", 1, "Employ", "cool@gmail.com")  
            expect(test.getEmail()).toBe("cool@gmail.com");
        })
    })
    describe("getRole method", () => {
        it("return the role on the card", () => {
            const test = new Employee ("Cool", 1, "Employ", "cool@gmail.com")  
            expect(test.getRole()).toBe("Employee");
        })
    })
});