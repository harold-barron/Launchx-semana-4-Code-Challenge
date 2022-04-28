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
}

module.exports = Service