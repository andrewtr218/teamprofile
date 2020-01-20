const Engineer = require("../lib/classes/engineer")

dscribe("Engineer class", () => {
    describe("getGitHub", () => {
        it("returns the github on a card", () => {
            const test = new Engineer ("github")  
            expect(test.getGitHus()).toBe("github");
        })
    })
});