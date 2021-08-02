const Employee = require("../lib/Employee");

describe("Employee class", () => {
    it("Details of Employee Role are returned", () => {
        const employee= 
            {
                "name": "Tracy", 
                "id": 3, 
                "email": "tracy@companyx.com", 
            };
        expect(new Employee("Tracy", 3, "tracy@companyx.com")).toEqual(employee);
    })
});