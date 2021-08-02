const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
    it("Details of Engineer Role are returned", () => {
        const engineer= 
            {
                "name": "Joe", 
                "id": 5, 
                "email": "joe@gmail.com", 
                "github": "shooters00"
            };
        expect(new Engineer("Joe", 5, "joe@gmail.com", "shooters00")).toEqual(engineer);
    })
});