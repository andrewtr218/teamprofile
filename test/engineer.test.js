const Engineer = require("../lib/classes/engineer")

describe("Engineer class", () => {
    describe("getGitHub", () => {
        it("returns the github on a card", () => {
            const test = new Engineer ("github")  
            expect(test.getGithub()).toBe("github");
        })
    })
});