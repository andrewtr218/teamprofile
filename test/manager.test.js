const Manager = require("../lib/classes/manager")

describe("Manager class", () => {
    describe("getOfficeNumber", () => {
        it("returns the Office Number on a card", () => {
            const test = new Manager (24)  
            expect(test.getOfficeNumber()).toBe(24);
        })
    })
});