const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const bodyparser = require("body-parser");
const axios = require("axios");

var jsonParser = bodyparser.json();
const app = express();
app.use(cors());

app.get("/", function (req, res) {
    res.send({ "stage": "dev" });
});

app.get("/getAll", function (req, res) {
    axios.get("https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/getAll")
        .then(function (response) {
            res.status(200).send(response.data);
        }).catch(err => { res.status(500).send(err); });
});

//Genres

app.get("/getAllGenres", function (req, res) {
    axios.get("https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/getAllGenres")
        .then(function (response) {
            res.status(200).send(response.data);
        }).catch(err => { res.status(500).send(err); });
});

app.get("/getGenre/:sk", function (req, res) {
    axios.get("https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/getGenre/" + req.params.sk)
        .then(function (response) {
            res.status(200).send(response.data);
        }).catch(err => { res.status(500).send(err); });
});

app.post("/createGenre", jsonParser, function (req, res) {
    (async => {
        try {
            let data = {
                "name": req.body.name
            };

            axios.post("https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/createGenre/", data)
                .then(function (response) {
                    res.status(200).send(response.data);
                }).catch(err => { res.status(500).send(err); });
        } catch (err) {
            return res.status(500).send(err);
        }
    })();
});

app.put("/updateGenre/:sk", jsonParser, function (req, res) {
    url = "https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/updateGenre/" + req.params.sk;
    let data = {
        "name": req.body.name,
    };
    axios.put(url, data)
        .then(function (response) {
            res.status(200).send(response.data);
        }).catch(err => { res.status(500).send(err); });
});

app.delete("/deleteGenre/:sk", function (req, res) {
    url = "https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/deleteGenre/" + req.params.sk;

    axios.delete(url)
        .then(function (response) {
            res.status(200).send(response.data);
        }).catch(err => { res.status(500).send(err); });
});

//Users

app.get("/getAllUsers", function (req, res) {
    axios.get("https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/getAllUsers")
        .then(function (response) {
            res.status(200).send(response.data);
        }).catch(err => { res.status(500).send(err); });
});

app.get("/getUser/:sk", function (req, res) {
    axios.get("https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/getUser/" + req.params.sk)
        .then(function (response) {
            res.status(200).send(response.data);
        }).catch(err => { res.status(500).send(err); });
});

app.post("/createUser", jsonParser, function (req, res) {
    (async => {
        try {
            let data = {
                "name": req.body.name,
                "lastnamef": req.body.lastnamef,
                "lastnamem": req.body.lastnamem,
                "password": req.body.password,
                "phone": req.body.phone,
                "street": req.body.street,
                "num": req.body.num,
                "suburb": req.body.suburb,
                "zipcode": req.body.zipcode
            };

            axios.post("https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/createUser/", data)
                .then(function (response) {
                    res.status(200).send(response.data);
                }).catch(err => { res.status(500).send(err); });
        } catch (err) {
            return res.status(500).send(err);
        }
    })();
});

app.put("/updateUser/:sk", jsonParser, function (req, res) {
    url = "https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/updateUser/" + req.params.sk;
    let data = {
        "name": req.body.name,
        "lastnamef": req.body.lastnamef,
        "lastnamem": req.body.lastnamem,
        "password": req.body.password,
        "phone": req.body.phone,
        "street": req.body.street,
        "num": req.body.num,
        "suburb": req.body.suburb,
        "zipcode": req.body.zipcode
    };
    axios.put(url, data)
        .then(function (response) {
            res.status(200).send(response.data);
        }).catch(err => { res.status(500).send(err); });
});

app.delete("/deleteUser/:sk", function (req, res) {
    url = "https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/deleteUser/" + req.params.sk;

    axios.delete(url)
        .then(function (response) {
            res.status(200).send(response.data)
        }).catch(err => { res.status(500).send(err) })
});

//Authors

app.get("/getAllAuthors", function (req, res) {
    axios.get("https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/getAllAuthors")
        .then(function (response) {
            res.status(200).send(response.data)
        }).catch(err => { res.status(500).send(err) })
});

app.get("/getAuthor/:sk", function (req, res) {
    axios.get("https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/getAuthor/" + req.params.sk)
        .then(function (response) {
            res.status(200).send(response.data)
        }).catch(err => { res.status(500).send(err) })
});

app.post("/createAuthor", jsonParser, function (req, res) {
    (async => {
        try {
            let data = {
                "name": req.body.name
            }

            axios.post("https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/createAuthor/", data)
                .then(function (response) {
                    res.status(200).send(response.data)
                }).catch(err => { res.status(500).send(err) })
        } catch (err) {
            return res.status(500).send(err)
        }
    })()
});

app.put("/updateAuthor/:sk", jsonParser, function (req, res) {
    url = "https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/updateAuthor/" + req.params.sk;
    let data = {
        "name": req.body.name,
    }
    axios.put(url, data)
        .then(function (response) {
            res.status(200).send(response.data)
        }).catch(err => { res.status(500).send(err) })
});

app.delete("/deleteAuthor/:sk", function (req, res) {
    url = "https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/deleteAuthor/" + req.params.sk;

    axios.delete(url)
        .then(function (response) {
            res.status(200).send(response.data)
        }).catch(err => { res.status(500).send(err) })
});

//Editorials

app.get("/getAllEditorials", function (req, res) {
    axios.get("https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/getAllEditorials")
        .then(function (response) {
            res.status(200).send(response.data)
        }).catch(err => { res.status(500).send(err) })
});

app.get("/getEditorial/:sk", function (req, res) {
    axios.get("https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/getEditorial/" + req.params.sk)
        .then(function (response) {
            res.status(200).send(response.data)
        }).catch(err => { res.status(500).send(err) })
});

app.post("/createEditorial", jsonParser, function (req, res) {
    (async => {
        try {
            let data = {
                "id_order": req.body.id_order,
                "editorial_phone": req.body.editorial_phone,
                "contact_name": req.body.contact_name
            }

            axios.post("https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/createEditorial/", data)
                .then(function (response) {
                    res.status(200).send(response.data)
                }).catch(err => { res.status(500).send(err) })
        } catch (err) {
            return res.status(500).send(err)
        }
    })()
});

app.put("/updateEditorial/:sk", jsonParser, function (req, res) {
    url = "https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/updateEditorial/" + req.params.sk;
    let data = {
        "id_order": req.body.id_order,
        "editorial_phone": req.body.editorial_phone,
        "contact_name": req.body.contact_name
    }
    axios.put(url, data)
        .then(function (response) {
            res.status(200).send(response.data)
        }).catch(err => { res.status(500).send(err) })
});

app.delete("/deleteEditorial/:sk", function (req, res) {
    url = "https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/deleteEditorial/" + req.params.sk;

    axios.delete(url)
        .then(function (response) {
            res.status(200).send(response.data)
        }).catch(err => { res.status(500).send(err) })
});

//Sales

app.get("/getAllSales", function (req, res) {
    axios.get("https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/getAllSales")
        .then(function (response) {
            res.status(200).send(response.data)
        }).catch(err => { res.status(500).send(err) })
});

app.get("/getSale/:sk", function (req, res) {
    axios.get("https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/getSale/" + req.params.sk)
        .then(function (response) {
            res.status(200).send(response.data)
        }).catch(err => { res.status(500).send(err) })
});

app.post("/createSale", jsonParser, function (req, res) {
    (async => {
        try {
            let data = {
                "id_book": req.body.id_book,
                "id_user": req.body.id_user,
                "cost": req.body.cost,
                "amount": req.body.amount
            }

            axios.post("https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/createSale/", data)
                .then(function (response) {
                    res.status(200).send(response.data)
                }).catch(err => { res.status(500).send(err) })
        } catch (err) {
            return res.status(500).send(err)
        }
    })()
});

app.put("/updateSale/:sk", jsonParser, function (req, res) {
    url = "https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/updateSale/" + req.params.sk;
    let data = {
        "id_book": req.body.id_book,
        "id_user": req.body.id_user,
        "cost": req.body.cost,
        "amount": req.body.amount
    }
    axios.put(url, data)
        .then(function (response) {
            res.status(200).send(response.data)
        }).catch(err => { res.status(500).send(err) })
});

app.delete("/deleteSale/:sk", function (req, res) {
    url = "https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/deleteSale/" + req.params.sk;

    axios.delete(url)
        .then(function (response) {
            res.status(200).send(response.data)
        }).catch(err => { res.status(500).send(err) })
});

//Books

app.get("/getAllBooks", function (req, res) {
    axios.get("https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/getAllBooks")
        .then(function (response) {
            res.status(200).send(response.data)
        }).catch(err => { res.status(500).send(err) })
});

app.get("/getBook/:sk", function (req, res) {
    axios.get("https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/getBook/" + req.params.sk)
        .then(function (response) {
            res.status(200).send(response.data)
        }).catch(err => { res.status(500).send(err) })
});

app.post("/createBook", jsonParser, function (req, res) {
    (async => {
        try {
            let data = {
                "name": req.body.name,
                "id_genre": req.body.id_genre,
                "id_author": req.body.id_author,
                "id_editorial": req.body.id_editorial,
                "price": req.body.price,
                "isbn": req.body.isbn,
                "description": req.body.description
            }

            axios.post("https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/createBook/", data)
                .then(function (response) {
                    res.status(200).send(response.data)
                }).catch(err => { res.status(500).send(err) })
        } catch (err) {
            return res.status(500).send(err)
        }
    })()
});

app.put("/updateBook/:sk", jsonParser, function (req, res) {
    url = "https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/updateBook/" + req.params.sk;
    let data = {
        "name": req.body.name,
        "id_genre": req.body.id_genre,
        "id_author": req.body.id_author,
        "id_editorial": req.body.id_editorial,
        "price": req.body.price,
        "isbn": req.body.isbn,
        "description": req.body.description
    }
    axios.put(url, data)
        .then(function (response) {
            res.status(200).send(response.data)
        }).catch(err => { res.status(500).send(err) })
});

app.delete("/deleteBook/:sk", function (req, res) {
    url = "https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/deleteBook/" + req.params.sk;

    axios.delete(url)
        .then(function (response) {
            res.status(200).send(response.data)
        }).catch(err => { res.status(500).send(err) })
});

//Orders

app.get("/getAllOrders", function (req, res) {
    axios.get("https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/getAllOrders")
        .then(function (response) {
            res.status(200).send(response.data)
        }).catch(err => { res.status(500).send(err) })
});

app.get("/getOrder/:sk", function (req, res) {
    axios.get("https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/getOrder/" + req.params.sk)
        .then(function (response) {
            res.status(200).send(response.data)
        }).catch(err => { res.status(500).send(err) })
});

app.post("/createOrder", jsonParser, function (req, res) {
    (async => {
        try {
            let data = {
                "id_user": req.body.id_user,
                "id_book": req.body.id_book,
                "delivery_date": req.body.delivery_date,
                "order_date": req.body.order_date,
                "quantity_books": req.body.quantity_books,
                "cost": req.body.cost
            }

            axios.post("https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/createOrder/", data)
                .then(function (response) {
                    res.status(200).send(response.data)
                }).catch(err => { res.status(500).send(err) })
        } catch (err) {
            return res.status(500).send(err)
        }
    })()
});

app.put("/updateOrder/:sk", jsonParser, function (req, res) {
    url = "https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/updateOrder/" + req.params.sk;
    let data = {
        "id_user": req.body.id_user,
        "id_book": req.body.id_book,
        "delivery_date": req.body.delivery_date,
        "order_date": req.body.order_date,
        "quantity_books": req.body.quantity_books,
        "cost": req.body.cost
    }
    axios.put(url, data)
        .then(function (response) {
            res.status(200).send(response.data)
        }).catch(err => { res.status(500).send(err) })
});

app.delete("/deleteOrder/:sk", function (req, res) {
    url = "https://epkb7eza34.execute-api.us-east-2.amazonaws.com/dev/deleteOrder/" + req.params.sk;

    axios.delete(url)
        .then(function (response) {
            res.status(200).send(response.data)
        }).catch(err => { res.status(500).send(err) })
});

var server = app.listen(4000, function () {
    console.log("Corriendo en localhost: 4000");
});

module.exports.handler = serverless(app);