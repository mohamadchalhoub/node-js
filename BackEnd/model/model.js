const mysql = require("mysql");

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'blogs'
});


db.connect((err) => {
  if (!err) {
    console.log("connection to database done");
  } else {
    console.log("connection to database failed", err);
  }
})

module.exports = db;
