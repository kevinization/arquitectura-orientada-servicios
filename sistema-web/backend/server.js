const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const bodyparser = require("body-parser");
const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

var dynamodb = new AWS.DynamoDB.DocumentClient({ region: "us-east-2" });

var jsonParser = bodyparser.json();
const app = express();
app.use(cors());

app.get("/", function (req, res) {
  res.send({ stage: "dev" });
});

app.get("/getAll", function (req, res) {
  var params = {
    TableName: "bookshop_dreamteam",
  };

  dynamodb.scan(params, function (err, response) {
    if (err) res.status(500).send(err);
    else {
      res.status(200).send(response.Items);
    }
  });
});

//Genre

app.post("/createGenre", jsonParser, function (req, res) {
  let id = uuidv4();
  let date = new Date().toLocaleString("es-MX", {
    timeZone: "America/Mexico_City",
  });

  (async () => {
    try {
      let data = {
        pk: "Genre",
        sk: id,
        name: req.body.name,
        createdAt: date,
      };

      var params = {
        Item: data,
        ReturnConsumedCapacity: "TOTAL",
        TableName: "bookshop_dreamteam",
      };

      dynamodb.put(params, function (err, response) {
        if (err) res.status(500).send(err);
        else {
          res.status(200).send(data);
        }
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  })();
});

app.get("/getAllGenres", function (req, res) {
  (async () => {
    try {
      var params = {
        TableName: "bookshop_dreamteam",
        KeyConditionExpression: "pk = :pk",
        ExpressionAttributeValues: {
          ":pk": "Genre",
        },
      };

      dynamodb.query(params, function (err, response) {
        if (err) res.status(500).send(err);
        else {
          res.status(200).send(response.Items);
        }
      });
    } catch (err) {
      res.status(500).send(err);
    }
  })();
});

app.get("/getGenre/:sk", function (req, res) {
  (async () => {
    try {
      var params = {
        TableName: "bookshop_dreamteam",
        Key: {
          pk: "Genre",
          sk: req.params.sk,
        }
      };

      dynamodb.get(params, function (err, response) {
        if (err) res.status(500).send(err);
        else {
          res.status(200).send(response.Item);
        }
      });
    } catch (err) {
      res.status(500).send(err);
    }
  })();
});

app.put("/updateGenre/:sk", jsonParser, function (req, res) {
  var params = {
    TableName: "bookshop_dreamteam",
    Key: {
      pk: "Genre",
      sk: req.params.sk,
    },
    UpdateExpression: "set #name = :n",
    ExpressionAttributeValues: {
      ":n": req.body.name,
    },
    ExpressionAttributeNames: {
      "#name": "name",
    },
    ReturnValues: "UPDATED_NEW",
  };

  dynamodb.update(params, function (err, response) {
    if (err) res.status(500).send(err);
    else {
      res.status(200).send(response);
    }
  });
});

app.delete("/deleteGenre/:sk", function (req, res) {
  var params = {
    TableName: "bookshop_dreamteam",
    Key: {
      pk: "Genre",
      sk: req.params.sk,
    },
  };

  dynamodb.delete(params, function (err, response) {
    if (err) res.status(500).send(err);
    else {
      res.status(200).send("Deleted");
    }
  });
});

//User

app.post("/createUser", jsonParser, function (req, res) {
  let id = uuidv4();
  let date = new Date().toLocaleString("es-MX", {
    timeZone: "America/Mexico_City",
  });

  (async () => {
    try {
      let data = {
        pk: "User",
        sk: id,
        name: req.body.name,
        lastnamef: req.body.lastnamef,
        lastnamem: req.body.lastnamem,
        password: req.body.password,
        phone: req.body.phone,
        street: req.body.street,
        num: req.body.num,
        suburb: req.body.suburb,
        zipcode: req.body.zipcode,
        createdAt: date,
      };

      var params = {
        Item: data,
        ReturnConsumedCapacity: "TOTAL",
        TableName: "bookshop_dreamteam",
      };

      dynamodb.put(params, function (err, response) {
        if (err) res.status(500).send(err);
        else {
          res.status(200).send(data);
        }
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  })();
});

app.get("/getAllUsers", function (req, res) {
  (async () => {
    try {
      var params = {
        TableName: "bookshop_dreamteam",
        KeyConditionExpression: "pk = :pk",
        ExpressionAttributeValues: {
          ":pk": "User",
        },
      };

      dynamodb.query(params, function (err, response) {
        if (err) res.status(500).send(err);
        else {
          res.status(200).send(response.Items);
        }
      });
    } catch (err) {
      res.status(500).send(err);
    }
  })();
});

app.get("/getUser/:sk", function (req, res) {
  (async () => {
    try {
      var params = {
        TableName: "bookshop_dreamteam",
        Key: {
          pk: "User",
          sk: req.params.sk,
        }
      };

      dynamodb.get(params, function (err, response) {
        if (err) res.status(500).send(err)
        else {
          res.status(200).send(response.Item);
        }
      })
    } catch (err) {
      res.status(500).send(err)
    }
  })();
});

app.put("/updateUser/:sk", jsonParser, function (req, res) {
  var params = {
    TableName: "bookshop_dreamteam",
    Key: {
      pk: "User",
      sk: req.params.sk,
    },
    UpdateExpression:
      "set #name = :n, lastnamef = :f, lastnamem = :m, password = :ps, phone = :p, street = :st, num = :num, suburb = :s, zipcode = :zp",
    ExpressionAttributeValues: {
      ":n": req.body.name,
      ":f": req.body.lastnamef,
      ":m": req.body.lastnamem,
      ":ps": req.body.password,
      ":p": req.body.phone,
      ":st": req.body.street,
      ":num": req.body.num,
      ":s": req.body.suburb,
      ":zp": req.body.zipcode,
    },
    ExpressionAttributeNames: {
      "#name": "name",
    },
    ReturnValues: "UPDATED_NEW",
  };

  dynamodb.update(params, function (err, response) {
    if (err) res.status(500).send(err);
    else {
      res.status(200).send(response);
    }
  });
});

app.delete("/deleteUser/:sk", function (req, res) {
  var params = {
    TableName: "bookshop_dreamteam",
    Key: {
      pk: "User",
      sk: req.params.sk,
    },
  };

  dynamodb.delete(params, function (err, response) {
    if (err) res.status(500).send(err);
    else {
      res.status(200).send("Deleted");
    }
  });
});

//Author

app.post("/createAuthor", jsonParser, function (req, res) {
  let id = uuidv4();
  let date = new Date().toLocaleString("es-MX", {
    timeZone: "America/Mexico_City",
  });

  (async () => {
    try {
      let data = {
        pk: "Author",
        sk: id,
        name: req.body.name,
        createdAt: date,
      };

      var params = {
        Item: data,
        ReturnConsumedCapacity: "TOTAL",
        TableName: "bookshop_dreamteam",
      };

      dynamodb.put(params, function (err, response) {
        if (err) res.status(500).send(err);
        else {
          res.status(200).send(data);
        }
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  })();
});

app.get("/getAllAuthors", function (req, res) {
  (async () => {
    try {
      var params = {
        TableName: "bookshop_dreamteam",
        KeyConditionExpression: "pk = :pk",
        ExpressionAttributeValues: {
          ":pk": "Author",
        },
      };

      dynamodb.query(params, function (err, response) {
        if (err) res.status(500).send(err);
        else {
          res.status(200).send(response.Items);
        }
      });
    } catch (err) {
      res.status(500).send(err);
    }
  })();
});

app.get("/getAuthor/:sk", function (req, res) {
  (async () => {
    try {
      var params = {
        TableName: "bookshop_dreamteam",
        Key: {
          pk: "Author",
          sk: req.params.sk,
        }
      };

      dynamodb.get(params, function (err, response) {
        if (err) res.status(500).send(err);
        else {
          res.status(200).send(response.Item);
        }
      });
    } catch (err) {
      res.status(500).send(err);
    }
  })();
});

app.put("/updateAuthor/:sk", jsonParser, function (req, res) {
  var params = {
    TableName: "bookshop_dreamteam",
    Key: {
      pk: "Author",
      sk: req.params.sk,
    },
    UpdateExpression: "set #name = :n",
    ExpressionAttributeValues: {
      ":n": req.body.name,
    },
    ExpressionAttributeNames: {
      "#name": "name",
    },
    ReturnValues: "UPDATED_NEW",
  };

  dynamodb.update(params, function (err, response) {
    if (err) res.status(500).send(err);
    else {
      res.status(200).send(response);
    }
  });
});

app.delete("/deleteAuthor/:sk", function (req, res) {
  var params = {
    TableName: "bookshop_dreamteam",
    Key: {
      pk: "Author",
      sk: req.params.sk,
    },
  };

  dynamodb.delete(params, function (err, response) {
    if (err) res.status(500).send(err);
    else {
      res.status(200).send("Deleted");
    }
  });
});

//Editorials

app.post("/createEditorial", jsonParser, function (req, res) {
  let id = uuidv4();
  let date = new Date().toLocaleString("es-MX", {
    timeZone: "America/Mexico_City",
  });

  (async () => {
    try {
      let data = {
        pk: "Editorial",
        sk: id,
        id_order: req.body.id_order,
        editorial_phone: req.body.editorial_phone,
        contact_name: req.body.contact_name,
        createdAt: date,
      };

      var params = {
        Item: data,
        ReturnConsumedCapacity: "TOTAL",
        TableName: "bookshop_dreamteam",
      };

      dynamodb.put(params, function (err, response) {
        if (err) res.status(500).send(err);
        else {
          res.status(200).send(data);
        }
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  })();
});

app.get("/getAllEditorials", function (req, res) {
  (async () => {
    try {
      var params = {
        TableName: "bookshop_dreamteam",
        KeyConditionExpression: "pk = :pk",
        ExpressionAttributeValues: {
          ":pk": "Editorial",
        },
      };

      dynamodb.query(params, function (err, response) {
        if (err) res.status(500).send(err);
        else {
          res.status(200).send(response.Items);
        }
      });
    } catch (err) {
      res.status(500).send(err);
    }
  })();
});

app.get("/getEditorial/:sk", function (req, res) {
  (async () => {
    try {
      var params = {
        TableName: "bookshop_dreamteam",
        Key: {
          pk: "Editorial",
          sk: req.params.sk,
        }
      };

      dynamodb.get(params, function (err, response) {
        if (err) res.status(500).send(err)
        else {
          res.status(200).send(response.Item);
        }
      })
    } catch (err) {
      res.status(500).send(err)
    }
  })()
})

app.put("/updateEditorial/:sk", jsonParser, function (req, res) {
  var params = {
    TableName: "bookshop_dreamteam",
    Key: {
      pk: "Editorial",
      sk: req.params.sk,
    },
    UpdateExpression:
      "set id_order = :io, editorial_phone = :ep, contact_name = :cn",
    ExpressionAttributeValues: {
      ":io": req.body.id_order,
      ":ep": req.body.editorial_phone,
      ":cn": req.body.contact_name,
    },
  };

  dynamodb.update(params, function (err, response) {
    if (err) res.status(500).send(err);
    else {
      res.status(200).send(response);
    }
  });
});

app.delete("/deleteEditorial/:sk", function (req, res) {
  var params = {
    TableName: "bookshop_dreamteam",
    Key: {
      pk: "Editorial",
      sk: req.params.sk,
    },
  };

  dynamodb.delete(params, function (err, response) {
    if (err) res.status(500).send(err);
    else {
      res.status(200).send("Deleted");
    }
  });
});

//Sales

app.post("/createSale", jsonParser, function (req, res) {
  let id = uuidv4();
  let date = new Date().toLocaleString("es-MX", {
    timeZone: "America/Mexico_City",
  });

  (async () => {
    try {
      let data = {
        pk: "Sale",
        sk: id,
        id_book: req.body.id_book,
        id_user: req.body.id_user,
        sale_date: date,
        cost: req.body.cost,
        amount: req.body.amount,
        createdAt: date,
      };

      var params = {
        Item: data,
        ReturnConsumedCapacity: "TOTAL",
        TableName: "bookshop_dreamteam",
      };

      dynamodb.put(params, function (err, response) {
        if (err) res.status(500).send(err);
        else {
          res.status(200).send(data);
        }
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  })();
});

app.get("/getAllSales", function (req, res) {
  (async () => {
    try {
      var params = {
        TableName: "bookshop_dreamteam",
        KeyConditionExpression: "pk = :pk",
        ExpressionAttributeValues: {
          ":pk": "Sale",
        },
      };

      dynamodb.query(params, function (err, response) {
        if (err) res.status(500).send(err);
        else {
          res.status(200).send(response.Items);
        }
      });
    } catch (err) {
      res.status(500).send(err);
    }
  })();
});

app.get("/getSale/:sk", function (req, res) {
  (async () => {
    try {
      var params = {
        TableName: "bookshop_dreamteam",
        Key: {
          pk: "Sale",
          sk: req.params.sk,
        }
      };

      dynamodb.get(params, function (err, response) {
        if (err) res.status(500).send(err)
        else {
          res.status(200).send(response.Item);
        }
      })
    } catch (err) {
      res.status(500).send(err)
    }
  })()
})

app.put("/updateSale/:sk", jsonParser, function (req, res) {
  var params = {
    TableName: "bookshop_dreamteam",
    Key: {
      pk: "Sale",
      sk: req.params.sk,
    },
    UpdateExpression:
      "set id_book = :ib, id_user = :iu, cost = :c, amount = :a",
    ExpressionAttributeValues: {
      ":ib": req.body.id_book,
      ":iu": req.body.id_user,
      ":c": req.body.cost,
      ":a": req.body.amount,
    }
  };

  dynamodb.update(params, function (err, response) {
    if (err) res.status(500).send(err);
    else {
      console.log(response)
      res.status(200).send(response);
    }
  });
});

app.delete("/deleteSale/:sk", function (req, res) {
  var params = {
    TableName: "bookshop_dreamteam",
    Key: {
      pk: "Sale",
      sk: req.params.sk,
    },
  };

  dynamodb.delete(params, function (err, response) {
    if (err) res.status(500).send(err);
    else {
      res.status(200).send("Deleted");
    }
  });
});

//books

app.post("/createBook", jsonParser, function (req, res) {
  let id = uuidv4();
  let date = new Date().toLocaleString("es-MX", {
    timeZone: "America/Mexico_City",
  });

  (async () => {
    try {
      let data = {
        pk: "Book",
        sk: id,
        name: req.body.name,
        id_genre: req.body.id_genre,
        id_author: req.body.id_author,
        id_editorial: req.body.id_editorial,
        price: req.body.price,
        isbn: req.body.isbn,
        description: req.body.description,
        createdAt: date,
      };

      var params = {
        Item: data,
        ReturnConsumedCapacity: "TOTAL",
        TableName: "bookshop_dreamteam",
      };

      dynamodb.put(params, function (err, response) {
        if (err) res.status(500).send(err);
        else {
          res.status(200).send(data);
        }
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  })();
});

app.get("/getAllBooks", function (req, res) {
  (async () => {
    try {
      var params = {
        TableName: "bookshop_dreamteam",
        KeyConditionExpression: "pk = :pk",
        ExpressionAttributeValues: {
          ":pk": "Book",
        },
      };

      dynamodb.query(params, function (err, response) {
        if (err) res.status(500).send(err);
        else {
          res.status(200).send(response.Items);
        }
      });
    } catch (err) {
      res.status(500).send(err);
    }
  })();
});

app.get("/getBook/:sk", function (req, res) {
  (async () => {
    try {
      var params = {
        TableName: "bookshop_dreamteam",
        Key: {
          pk: "Book",
          sk: req.params.sk,
        }
      };

      dynamodb.get(params, function (err, response) {
        if (err) res.status(500).send(err);
        else {
          res.status(200).send(response.Item);
        }
      });
    } catch (err) {
      res.status(500).send(err);
    }
  })();
});


app.put("/updateBook/:sk", jsonParser, function (req, res) {
  var params = {
    TableName: "bookshop_dreamteam",
    Key: {
      pk: "Book",
      sk: req.params.sk,
    },
    UpdateExpression:
      "set #name = :n, id_genre = :g, id_author = :a, id_editorial = :e, price = :p, isbn = :isbn, description = :d",
    ExpressionAttributeValues: {
      ":n": req.body.name,
      ":g": req.body.id_genre,
      ":a": req.body.id_author,
      ":e": req.body.id_editorial,
      ":p": req.body.price,
      ":isbn": req.body.isbn,
      ":d": req.body.description,
    },
    ExpressionAttributeNames: {
      "#name": "name",
    },
    ReturnValues: "UPDATED_NEW",
  };

  dynamodb.update(params, function (err, response) {
    if (err) res.status(500).send(err);
    else {
      res.status(200).send(response);
    }
  });
});

app.delete("/deleteBook/:sk", function (req, res) {
  var params = {
    TableName: "bookshop_dreamteam",
    Key: {
      pk: "Book",
      sk: req.params.sk,
    },
  };

  dynamodb.delete(params, function (err, response) {
    if (err) res.status(500).send(err);
    else {
      res.status(200).send("Deleted");
    }
  });
});

//order

app.post("/createOrder", jsonParser, function (req, res) {
  let id = uuidv4();
  let date = new Date().toLocaleString("es-MX", {
    timeZone: "America/Mexico_City",
  });

  (async () => {
    try {
      let data = {
        pk: "Order",
        sk: id,
        id_user: req.body.id_user,
        id_book: req.body.id_book,
        delivery_date: req.body.delivery_date,
        order_date: req.body.order_date,
        quantity_books: req.body.quantity_books,
        cost: req.body.cost,
        createdAt: date,
      };

      var params = {
        Item: data,
        ReturnConsumedCapacity: "TOTAL",
        TableName: "bookshop_dreamteam",
      };

      dynamodb.put(params, function (err, response) {
        if (err) res.status(500).send(err);
        else {
          res.status(200).send(data);
        }
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  })();
});

app.get("/getAllOrders", function (req, res) {
  (async () => {
    try {
      var params = {
        TableName: "bookshop_dreamteam",
        KeyConditionExpression: "pk = :pk",
        ExpressionAttributeValues: {
          ":pk": "Order",
        },
      };

      dynamodb.query(params, function (err, response) {
        if (err) res.status(500).send(err);
        else {
          res.status(200).send(response.Items);
        }
      });
    } catch (err) {
      res.status(500).send(err);
    }
  })();
});

app.get("/getOrder/:sk", function (req, res) {
  (async () => {
    try {

      var params = {
        TableName: "bookshop_dreamteam",
        Key: {
          pk: "Order",
          sk: req.params.sk,
        }
      };

      dynamodb.get(params, function (err, response) {
        if (err) res.status(500).send(err)
        else {
          res.status(200).send(response.Item);
        }
      })
    } catch (err) {
      res.status(500).send(err)
    }
  })()
})

app.put("/updateOrder/:sk", jsonParser, function (req, res) {
  var params = {
    TableName: "bookshop_dreamteam",
    Key: {
      pk: "Order",
      sk: req.params.sk,
    },
    UpdateExpression:
      "set id_user = :u, id_book = :b, delivery_date = :dd, order_date = :od, quantity_books = :qb, cost = :c",
    ExpressionAttributeValues: {
      ":u": req.body.id_user,
      ":b": req.body.id_book,
      ":dd": req.body.delivery_date,
      ":od": req.body.order_date,
      ":qb": req.body.quantity_books,
      ":c": req.body.cost,
    },
    ReturnValues: "UPDATED_NEW",
  };

  dynamodb.update(params, function (err, response) {
    if (err) res.status(500).send(err);
    else {
      res.status(200).send(response);
    }
  });
});

app.delete("/deleteOrder/:sk", function (req, res) {
  var params = {
    TableName: "bookshop_dreamteam",
    Key: {
      pk: "Order",
      sk: req.params.sk,
    },
  };

  dynamodb.delete(params, function (err, response) {
    if (err) res.status(500).send(err);
    else {
      res.status(200).send("Deleted");
    }
  });
});

var server = app.listen(4001, function () {
  console.log("Corriendo en localhost:4001");
});

module.exports.handler = serverless(app);
