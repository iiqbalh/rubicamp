import { db } from './connect.js'

export default class User {
    constructor(obj) {
        this.userName = obj.userName
        this.password = obj.password
        this.role = obj.role
    }

    static username(user, callback) {
        db.all("select * from users where userName = ?", [user], (err, data) => {
            if (err) {
                return console.log("please contact administrator", err)
            } else {
                callback(data)
            }
        })
    }

    static password(password, callback) {
        db.get("select * from users where password = ?", [password], (err, data) => {
            if (err) {
                return console.log("please contact administrator", err)
            } else {
                callback(data)
            }
        });
    }
}    