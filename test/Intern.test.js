const Intern = require("../lib/Intern");

describe("Intern class", () => {
    it("Details of Intern Role are returned", () => {
        const intern= 
            {
                "name": "Peter", 
                "id": 10, 
                "email": "peter@gmail.com", 
                "school": "Penn State University"
            };
        expect(new Intern("Peter", 10, "peter@gmail.com", "Penn State University")).toEqual(intern);
    })
});