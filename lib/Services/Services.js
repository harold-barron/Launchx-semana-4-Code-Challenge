const Reader = require("./../utils/Reader")

class Service
{
    static showStudents(path)
    {
        const studentsInVisualPartners = Reader.readJsonFile(path)
        return studentsInVisualPartners
    }
    static getStudentWithCertification(path)
    {
        const studentsInVisualPartners = Reader.readJsonFile(path)
        const studentsWithCertification = studentsInVisualPartners.filter(students => students.haveCertification === true)
        const emailStudents = studentsWithCertification.map((emails) =>  emails.email)
        return emailStudents
    }
    static consultCredits(path)
    {
        const studentsInVisualPartners = Reader.readJsonFile(path)
        const studentsMoreThan500Credits = studentsInVisualPartners.filter(students => students.credits > 500)
        const studentsNames = studentsMoreThan500Credits.map((names) => names)
        return studentsNames

    }
}

module.exports = Service