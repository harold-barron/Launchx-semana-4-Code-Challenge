const ServiceController =require("./../../lib/Controller/ServiceController")

describe("Testing the controller", () =>
{
    // test("1.Consulting all the students and their fields", () =>
    // {
    //     const allStudents = ServiceController.showStudents("visualpartners.json")
    //     // const numberStudents = allStudents.length
    //     // expect(numberStudents).toBe(51)
    // })
    test("2. Get the email of all the students with certification", ()=>
    {
        const studentsEmail = ServiceController.getEmails("visualpartners.json",false)
        console.log(studentsEmail)
        // const ExplorersWithCertification = studentsEmail.forEach(certification => expect(certification.haveCertification).toBe(false)); 
    })
    // test("3.Get all the students with credist > 500", () =>
    // {
    //     const studentsCredits = ServiceController.getCredits("visualpartners.json",500)
    //     const ExplorersWithCredits = studentsCredits.forEach(numberOfCredits => expect(numberOfCredits.credits).toBeGreaterThan(500));
    //     console.log(studentsCredits)
    // })
})