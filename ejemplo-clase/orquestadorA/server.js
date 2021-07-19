const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const bodyparser = require("body-parser");
const axios = require("axios");

var jsonParser = bodyparser.json();
const app = express();
app.use(cors());

app.get("/", function (req, res) {
    res.send({ "stage": "dev" })
})

app.get("/getAllStudents", function (req, res) {
    axios.get("https://759ji08hb2.execute-api.us-east-2.amazonaws.com/dev/getAll")
        .then(function (response) {
            res.status(200).send(response.data)
        }).catch(err => { res.status(500).send(err) })
})

app.get("/getStudent/:name", function (req, res) {
    axios.get("https://759ji08hb2.execute-api.us-east-2.amazonaws.com/dev/getStudent/" + req.params.name)
        .then(function (response) {
            res.status(200).send(response.data)
        }).catch(err => { res.status(500).send(err) })
})

app.post("/createStudent", jsonParser, function (req, res) {
    (async => {
        try {
            let data = {
                "name": req.body.name,
                "lastname": req.body.lastname,
                "email": req.body.email
            }

            axios.post("https://759ji08hb2.execute-api.us-east-2.amazonaws.com/dev/createStudent/", data)
                .then(function (response) {
                    res.status(200).send(response.data)
                }).catch(err => { res.status(500).send(err) })
        } catch (err) {
            return res.status(500).send(err)
        }
    })()
})

app.put("/updateStudent/:sk", jsonParser, function (req, res) {
    url = "https://759ji08hb2.execute-api.us-east-2.amazonaws.com/dev/updateStudent/" + req.params.sk;
    let data = {
        "lastname": req.body.lastname,
        "email": req.body.email
    }
    axios.put(url, data)
        .then(function (response) {
            res.status(200).send(response.data)
        }).catch(err => { res.status(500).send(err) })
})

app.delete("/deleteStudent/:sk", function (req, res) {
    url = "https://759ji08hb2.execute-api.us-east-2.amazonaws.com/dev/deleteStudent/" + req.params.sk;

    axios.delete(url)
        .then(function (response) {
            res.status(200).send(response.data)
        }).catch(err => { res.status(500).send(err) })
})

var server = app.listen(4000, function () {
    console.log("Corriendo en localhost: 4000");
})

module.exports.handler = serverless(app);