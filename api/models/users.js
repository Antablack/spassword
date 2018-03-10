
var Users = function (fullname, email, username, password) {
    this._id = null;
    this.fullname = fullname;
    this.email = email;
    this.username = username;
    this.password = password;
}
Users.prototype.save = function () {
    return new Promise((resolve, reject) => {
        let data = {
            fullname: this.fullname, email: this.email,
            username: this.username, password: this.password,
        }
        let query = "";
        if (this._id == null) {
            data.creationdate = new Date();
            query = "INSERT INTO users SET ?";
        } else {
            query = "UPDATE users SET ? WHERE idusers=" + this._id;
        }
        this.connection.query(query, data, (err, result, fileds) => {
            if (err) reject(err);
            resolve(result);
        })

    })
    console.log(this.connection);
}

Users.getUsers = function (con) {
    return new Promise((resolve, reject) => {
        con.query("SELECT idusers,fullname,email,username,password,creationdate FROM users", (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    })
}

Users.getUsersxId = function (con, id) {
    return new Promise((resolve, reject) => {
        con.query("SELECT idusers,fullname,email,username,password,creationdate FROM users WHERE idusers = ?", [id], (err, result) => {
            if (err) reject(err);
            resolve(result[0]);
        })
    })
}

Users.deleteUsers = function (con,id) {
    return new Promise((resolve, reject) => {
        con.query("DELETE FROM users WHERE idusers = ?", [id], (err, result) => {
            if (err) reject(err);
            resolve();
        })
    })
}


Users.prototype.connection = null;


module.exports = Users;
