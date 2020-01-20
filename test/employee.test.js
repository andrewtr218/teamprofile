const Employee = require("../lib/classes/employee")

dscribe("Employee class", () => {
    describe("getName method", () => {
        it("returns the name on a card", () => {
            const test = new Employee ("Cool", 1, "Employ", "cool@gmail.com")  
            expect(test.getName()).toBe("Cool");
        })
    })
    describe("getID method", () => {
        it("returns the id on a card")
        const test = new Employee ("Cool", 1, "Employ", "cool@gmail.com")  
            expect(test.getID()).toBe(1);
    })
    describe("getEmail method", () => {
            const test = new Employee ("Cool", 1, "Employ", "cool@gmail.com")  
            expect(test.getEmail()).toBe("cool@gmail.com");
    })
    describe("getEmail method", () => {
            const test = new Employee ("Cool", 1, "Employ", "cool@gmail.com")  
            expect(test.getRoll()).toBe("Employee");
    })
});