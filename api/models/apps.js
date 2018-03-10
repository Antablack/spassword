

function Apps(name, website, username, password, idusers) {
    this._id = null;
    this.name = name;
    this.website = website;
    this.username = username;
    this.password = password;
    this.idusers = idusers;

}

Apps.prototype.save = function (con) {
    return new Promise((resolve, reject) => {
        let data = { name: this.name, website: this.website, username: this.username, 
                    password: this.password, idusers: this.idusers, lastmodify: new Date() };
        let query = "";
        if (this._id == null) {
            data.creationdate = new Date();
            query = "INSERT INTO apps SET ?";
        } else {
            query = "UPDATE apps SET ? WHERE idapps=" + this._id + " AND idusers=" + this.idusers;
        }
        con.query(query, data, (err, result) => {
            if (err) reject(err);
            resolve();
        })
    })
}

Apps.getApps = function (con) {
    return new Promise((resolve, reject) => {
        con.query("SELECT idapps,name,website,username,password,idusers,creationdate,lastmodify FROM apps", (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
}


Apps.getAppsxId = function (con, idUsers, idApps) {
    return new Promise((resolve, reject) => {
        con.query("SELECT idapps,name,website,username,password,idusers,creationdate,lastmodify FROM apps WHERE idapps=? AND idusers=?", [idApps, idUsers], (err, result) => {
            if (err) reject(err);
            resolve(result[0]);
        })
    })
}

Apps.deleteApps = function (con, idUsers, idApps) {
    return new Promise((resolve, reject) => {
        con.query("DELETE FROM apps WHERE idapps=? AND idusers=?", [idUsers, idApps], (err, reject) => {
            if (err) reject(reject);
            resolve();
        })
    })
}

module.exports = Apps;