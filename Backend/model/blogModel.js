const mysql = require('mysql')

const db = mysql.createConnection({
    host     : process.env.host,
    user     : process.env.user,
    password : process.env.password,
    database : process.env.database
})


db.connect((err) => {
    if (err) {
        console.log("connection to database failed", err);
    }
    console.log('connection to database done')
})

module.exports = db