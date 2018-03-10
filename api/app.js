const mysql = require("mysql");
const express = require("express");
const app = express();

const log = require("./controllers/logs");


var chalk = require("chalk");

var bodyParser = require("body-parser");

var connection;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(async (req, res, next) => {
    if (!connection) {
        console.log(chalk.green("[✓] trying connected database..."));
        var pool = mysql.createPool({ host: "localhost", user: "root", password: "Abc123456", database: "savepass" });
        let conn = function () {
            return new Promise((resolve, reject) => {
                pool.getConnection((err, con) => {
                    if (err) {
                        console.log(chalk.red("[✗] Error ", err));
                        reject();
                    }
                    console.log(chalk.green("[✓] connection to successful database"));
                    connection = con;
                    resolve();
                })

            })
        }
        await conn();
    }
    req.con = connection;
    log(req);
    next();
});


var users = require("./routes/users");
var apps = require("./routes/apps");
app.use("/api", users);
app.use("/api", apps);



module.exports = app;