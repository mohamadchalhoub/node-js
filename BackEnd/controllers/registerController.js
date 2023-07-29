const db = require("../model/model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require('dotenv').config()

const register = (req, res) => {
  const {
    fname,
    lname,
    address,
    telephone,
    email,
    pass,
  } = req.body;

  // Validate password
  if (!pass || pass.length < 8) {
    return res.status(400).json({ success: false, message: 'Password must be at least 8 characters long' });
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err;
    bcrypt.hash(pass, salt, (err, hash) => {
      if (err) throw err      
      db.query(
        'INSERT INTO users (fname, lname, address, telephone, email, pass) VALUES (?, ?, ?, ?, ?, ?)',
        [fname, lname, address, telephone, email, hash],
        (err, result) => {
          if (err) throw err;
          const token = jwt.sign({ id: result.insertId }, process.env.secret, {
            expiresIn: 86400,
          });
          res.status(201).json({ success: true, token, message: 'Registration successful!' });
        }
      );
    });
  });
};


module.exports = register;
