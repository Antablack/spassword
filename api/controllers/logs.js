const parser = require("ua-parser-js");

function log(req) {
    var ip;
    if (req.headers['x-forwarded-for']) {
        ip = req.headers['x-forwarded-for'].split(",")[0];
    } else if (req.connection && req.connection.remoteAddress) {
        ip = req.connection.remoteAddress;
    } else {
        ip = req.ip;
    }
    var info = parser(req.headers["user-agent"]);
    info.ip = ip;
    console.log(JSON.stringify(info));
}


module.exports = log;

