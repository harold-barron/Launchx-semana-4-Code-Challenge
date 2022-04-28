const Reader = require("../utils/Reader");

class Service {
    static showStudents(path) {
        const studentsInVisualPartners = Reader.readJsonFile(path);
        return studentsInVisualPartners;
    }

    static getStudentWithCertification(path, condition) {
        const studentsInVisualPartners = Reader.readJsonFile(path);
        const studentsWithCertification = studentsInVisualPartners.filter((students) => students.haveCertification === condition);
        const emailStudents = studentsWithCertification.map((emails) => emails.email);
        return emailStudents;
    }

    static consultCredits(path, numOfCredits) {
        const studentsInVisualPartners = Reader.readJsonFile(path);
        const studentsMoreThan500Credits = studentsInVisualPartners.filter((students) => students.credits > numOfCredits);
        const studentsNames = studentsMoreThan500Credits.map((names) => names);
        return studentsNames;
    }
}

module.exports = Service;
