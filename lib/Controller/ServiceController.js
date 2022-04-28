const Services = require("./../Services/Services")

class ServiceController
{
    static showStudents(path)
    {
        const showAllStudents = Services.showStudents(path)
        
        return console.log(showAllStudents)
    }
}

module.exports = ServiceController