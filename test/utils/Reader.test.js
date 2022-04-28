const Reader = require("../../lib/utils/Reader");

describe("Testing aquisition of data", () => {
    test("1. Reading Json File", () => {
        const Reading = Reader.readJsonFile("visualpartners.json");
        console.log(Reading);
    });
});
