const ServiceController =require("./../../lib/Controller/ServiceController")

describe("Testing the controller", () =>
{
    test("1.Consulting all the students and their fields", () =>
    {
        const allStudents = ServiceController.showStudents("visualpartners.json")
        // const numberStudents = allStudents.length
        // expect(numberStudents).toBe(51)
    })
})