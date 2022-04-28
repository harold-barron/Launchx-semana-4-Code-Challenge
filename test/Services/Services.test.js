const Service = require("./../../lib/Services/Services")

describe("Testing Services", () =>
{
    test("1. Show all the students and their data", ()=>
    {
        const showStudents = Service.showStudents("visualpartners.json")
        console.log(showStudents)
        const numberStudents = showStudents.length
        expect(numberStudents).toBe(51)
    })
})