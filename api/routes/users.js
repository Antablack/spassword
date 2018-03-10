const express = require("express");



var Users = require("../models/users");
var routes = express.Router();


routes.post("/users", (req, res) => {
    console.log("POST /users");
    let users = new Users(req.body.fullname, req.body.email, req.body.username, req.body.password);
    users.connection = req.con;
    users.save().then(() => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
    });
});
routes.get("/users", (req, res) => {
    console.log("GET /users");
    let users = Users.getUsers(req.con).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});
routes.get("/users/:id", (req, res) => {
    console.log("GET /users/" + req.params.id);
    let users = Users.getUsersxId(req.con, req.params.id).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});
routes.put("/users/:id", (req, res) => {
    console.log("PUT /users/" + req.params.id);
    let users = new Users(req.body.fullname, req.body.email, req.body.username, req.body.password);
    users.connection = req.con;
    users._id = req.params.id;
    users.save().then(() => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
    });
});
routes.delete("/users/:id", (req, res) => {
    console.log("DELETE /users/" + req.params.id);
    let users = Users.deleteUsers(req.con, req.params.id).then((result) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});

module.exports = routes;
