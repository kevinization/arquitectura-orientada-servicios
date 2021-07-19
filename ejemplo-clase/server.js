const express = require('express')
const serverless = require('serverless-http')
const cors = require('cors')
const bodyparser = require('body-parser')
const AWS = require('aws-sdk')
const { v4: uuidv4 } = require('uuid')

var dynamodb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-2' });

var jsonParser = bodyparser.json();
const app = express();
app.use(cors());

app.get("/", function (req, res) {
    res.send({ "stage": "dev" })
})

app.post("/createStudent", jsonParser, function (req, res) {
    let id = uuidv4();
    let date = new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' });

    (async () => {
        try {
            let data = {
                "pk": "Student",
                "sk": id,
                "name": req.body.name,
                "lastname": req.body.lastname,
                "email": req.body.email,
                "createdAt": date
            };

            var params = {
                Item: data,
                ReturnConsumedCapacity: "TOTAL",
                TableName: "school_a"
            };

            dynamodb.put(params, function (err, response) {
                if (err) res.status(500).send(err);
                else {
                    res.status(200).send(data);
                }
            })
        } catch (error) {
            return res.status(500).send(error);
        }
    })()
})

app.get("/getAll", function (req, res) {
    var params = {
        TableName: "school_a"
    }

    dynamodb.scan(params, function (err, response) {
        if (err) res.status(500).send(err)
        else {
            res.status(200).send(response.Items)
        }
    })
})

app.get("/getStudent/:name", function (req, res) {
    (async () => {
        try {
            var params = {
                TableName: "school_a",
                KeyConditionExpression: "pk = :pk",
                ExpressionAttributeValues: {
                    ":pk": "Student",
                    ":name": req.params.name
                },
                ExpressionAttributeNames: {
                    "#name": "name"
                },
                FilterExpression: "#name = :name"
            };

            dynamodb.query(params, function (err, response) {
                if (err) res.status(500).send(err)
                else {
                    res.status(200).send(response.Items)
                }
            })
        } catch (err) {
            res.status(500).send(err)
        }
    })()
})

app.put("/updateStudent/:sk", jsonParser, function (req, res) {
    var params = {
        TableName: "school_a",
        Key: {
            "pk": "Student",
            "sk": req.params.sk
        },
        UpdateExpression: "set lastname = :l, email = :e",
        ExpressionAttributeValues: {
            ":l": req.body.lastname,
            ":e": req.body.email
        },
        ReturnValues: "UPDATED_NEW"
    };

    dynamodb.update(params, function (err, response) {
        if (err) res.status(500).send(err)
        else {
            res.status(200).send(response)
        }
    })
})

app.delete("/deleteStudent/:sk", function (req, res) {
    var params = {
        TableName: "school_a",
        Key: {
            "pk": "Student",
            "sk": req.params.sk
        }
    };

    dynamodb.delete(params, function (err, response) {
        if (err) res.status(500).send(err)
        else {
            res.status(200).send("Deleted")
        }
    })
})

var server = app.listen(4000, function () {
    console.log("Corriendo en localhost:4000")
})

module.exports.handler = serverless(app);
