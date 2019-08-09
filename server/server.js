const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

const peopleArray = [];

app.get('/demo', (req,res) => {
    res.send(peopleArray);
});

app.post('/demo', (req,res) => {
    console.log(req.body);

    const personObject = {
        name: req.body.name,
        color: req.body.color,
        isUser: req.body.isUser,
        testNumber: parseInt(req.body.testNumber),
    }

    peopleArray.push(personObject);
    res.sendStatus(201);
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})