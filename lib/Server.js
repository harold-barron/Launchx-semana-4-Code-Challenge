const controller = require("./Controller/ServiceController")

const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Code Challenge Api welcome!"});
});

app.listen(port, () => {
    console.log(`Code Challenge API in localhost:${port}`);
});


app.get("/v1/codechallenge/AllStudents",(req,res)=>
{
    const showStudents = controller.showStudents("visualpartners.json")
    res.json(showStudents)
})
