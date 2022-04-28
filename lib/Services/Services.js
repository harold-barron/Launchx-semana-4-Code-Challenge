const Reader = require("./../utils/Reader")

class Service
{
    static showStudents(path)
    {
        const studentsInVisualPartners = Reader.readJsonFile(path)
        return studentsInVisualPartners
    }
}

module.exports = Service