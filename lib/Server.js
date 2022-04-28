const express = require("express");
const req = require("express/lib/request");
const controller = require("./Controller/ServiceController");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({ message: "Code Challenge Api welcome!" });
});

app.listen(port, () => {
    console.log(`Code Challenge API in localhost:${port}`);
});

app.get("/v1/codechallenge/AllStudents", (req, res) => {
    const showStudents = controller.showStudents("visualpartners.json");
    res.json(showStudents);
});

app.get("/v1/codechallenge/Emails-With-Certification/:condition", (req, res) => {
    let condition1 = req.params.condition;
    if (condition1 === "true") {
        condition1 = true;
    }
    if (condition1 === "false") {
        condition1 = false;
    }
    const showCertifications = controller.getEmails("visualpartners.json", condition1);
    res.json({ Condition: req.params.condition, Emails: showCertifications });
});
app.get("/v1/codechallenge/Students-With-More-Credits-Than/:condition", (req, res) => {
    const condition1 = parseInt(req.params.condition);
    const showCertifications = controller.getCredits("visualpartners.json", condition1);
    res.json({ Condition: parseInt(req.params.condition), Emails: showCertifications });
});
