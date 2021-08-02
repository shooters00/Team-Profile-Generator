const Manager = require("../lib/Manager");

describe("Manager class", () => {
    it("Details of Manager Role are returned", () => {
        const manager= 
            {
                "name": "Rob", 
                "id": 1, 
                "email": "rob@gmail.com", 
                "officeNumber": "2b"
            };
        expect(new Manager("Rob", 1, "rob@gmail.com", "2b")).toEqual(manager);
    })
});