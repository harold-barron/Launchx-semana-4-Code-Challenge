const Services = require("./../Services/Services")

class ServiceController
{
    static showStudents(path)
    {
        const showAllStudents = Services.showStudents(path)
        return showAllStudents
    }

    static getEmails(path,condition)
    {
        const getAllEmails = Services.getStudentWithCertification(path,condition)
        return getAllEmails
    }
    static getCredits(path,numberOfCredits)
    {
        const getStudentsCretids = Services.consultCredits(path,numberOfCredits)
        return getStudentsCretids
    }
}

module.exports = ServiceController