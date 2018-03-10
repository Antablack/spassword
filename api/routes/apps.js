const express = require("express");
var Apps = require("../models/apps");
var routes = express.Router();


routes.get("/users/:id/apps", (req, res) => {
    console.log("GET /users/%s/apps", req.params.id);
    Apps.getApps(req.con, req.params.id).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});

routes.get("/users/:id/apps/:idapps", (req, res) => {
    console.log("GET /users/%s/apps/%s", req.params.id, req.params.idapps);
    Apps.getAppsxId(req.con, req.params.id, req.params.idapps).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
})

routes.post("/users/:id/apps", (req, res) => {
    console.log("POST /users/%s/apps", req.params.id);
    let apps = new Apps(req.body.name, req.body.website, req.body.username, req.body.password, req.params.id);
    apps.save(req.con).then((result) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
})

routes.put("/users/:id/apps/:idapps", (req, res) => {
    console.log("PUT /users/%s/apps/%s", req.params.id, req.params.idapps);
    let apps = new Apps(req.body.name, req.body.website, req.body.username, req.body.password, req.params.id);
    apps._id = req.params.idapps;
    apps.save(req.con).then((result) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
})

routes.delete("/users/:id/apps/:idapps", (req, res) => {
    console.log("DELETE /users/%s/apps/%s", req.params.id, req.params.idapps);
    Apps.deleteApps(req.con, req.params.id, req.params.idapps).then(() => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = routes;