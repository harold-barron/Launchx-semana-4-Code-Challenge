const ServiceController =require("./../../lib/Controller/ServiceController")

describe("Testing the controller", () =>
{
    test("1.Consulting all the students and their fields", () =>
    {
        const allStudents = ServiceController.showStudents("visualpartners.json")
        // const numberStudents = allStudents.length
        // expect(numberStudents).toBe(51)
    })
    test("2. Get the email of all the students with certification", ()=>
    {
        const studentsEmail = ServiceController.getEmails("visualpartners.json",true)
        expect(studentsEmail.haveCertification).toBe(true)
        console.log(studentsEmail)
    })
})