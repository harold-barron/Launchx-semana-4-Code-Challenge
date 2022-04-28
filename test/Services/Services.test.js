const Service = require("./../../lib/Services/Services")

describe("Testing Services", () =>
{
    test("1. Show all the students and their data", ()=>
    {
        const showStudents = Service.showStudents("visualpartners.json")
        // console.log(showStudents)
        const numberStudents = showStudents.length
        expect(numberStudents).toBe(51)
    })
    test("2. Get the email of all the students with certification", () =>
    {
        const getStudentWithCertification = Service.getStudentWithCertification("visualpartners.json")
        expect(getStudentWithCertification.haveCertification).toBe(true)
    })
})