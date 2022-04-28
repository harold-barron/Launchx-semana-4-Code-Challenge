const fs = require("fs");

class Reader {
    static readJsonFile(path) {
        const rawData = fs.readFileSync(path);
        const visualPartnersData = JSON.parse(rawData);
        return visualPartnersData;
    }
}

module.exports = Reader;
