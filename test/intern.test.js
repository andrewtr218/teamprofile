const Intern = require("../lib/classes/intern")

describe("Intern class", () => {
    describe("getSchool", () => {
        it("returns the school on a card", () => {
            const test = new Intern ("school")  
            expect(test.getSchool()).toBe("school");
        })
    })
});