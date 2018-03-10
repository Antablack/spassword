const app = require("./app");
var chalk = require("chalk");

var port = process.env.PORT || 3000;

console.log(chalk.green("[✓] Starting Aplication... "));



app.listen(port, function () {
    console.log(chalk.green("[✓] Running in Port " + port));
}).on("error", (err) => {
    console.log(chalk.red("[✗] Error ", err));
});







