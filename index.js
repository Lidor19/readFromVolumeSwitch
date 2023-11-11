const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const path = require("path")
const fs = require("fs")
const app = express();
const app2 = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app2.use(bodyParser.json());
app2.use(bodyParser.urlencoded({ extended: true }));

let message;
console.log("the path: " + process.env.DATA_PATH);

// get the path to the shared resource
const dataPath = path.join(process.env.DATA_PATH, process.env.DATA_FILE)


app.get('/ready', (req, res) => {
    console.log('switch is ready');
    res.status(200).send();
});

app.post('/command/checkEnvCommandFirst', (req, res) => {
    // get the data from the file
    let data = fs.readFileSync(dataPath)
    let mydata = JSON.parse(data.toString())
    // get a specific variable from the data
    const {check} = mydata
    console.log("the value is: " + check);
    res.status(200).send();
});


app.post('/command/checkEnvCommandSecond', (req, res) => {
    let data = fs.readFileSync(dataPath)
    let mydata = JSON.parse(data.toString())
    const {check} = mydata
    console.log("the value is: " + check);
    res.status(200).send();
});

app.listen(3000, () => {
    console.log('started to listen at 3000')
});

app2.listen(9002, () => {
    console.log('started to listen at 9002')
});