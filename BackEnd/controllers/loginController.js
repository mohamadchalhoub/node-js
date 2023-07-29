const db = require("../model/model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const login = (req, res) => {
  const { email, pass } = req.body;

  // Validate and sanitize input
  if (!email || !pass) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required.",
    });
  }

  // Use a prepared statement to prevent SQL injection
  db.query(`select * from users where email = ?`, [email], (err, result) => {
    if (err) {
      // Handle database errors
      return res.status(500).json({
        success: false,
        message: "An error occurred while logging in.",
      });
    }

    if (result.length === 0) {
      // Handle missing user
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    // Get the hashed password from the database
    const user = result[0];
    bcrypt.compare(pass, user.pass, (err, isMatch) => {
      if (err) {
        // Handle bcrypt errors
        return res.status(500).json({
          success: false,
          message: "An error occurred while logging in.",
        });
      }

      if (!isMatch) {
        // Handle incorrect password
        return res.status(401).json({
          success: false,
          message: "Invalid email or password.",
        });
      }

      // Generate a token using a secure library and a named constant
      const token = jwt.sign({ id: user.id }, process.env.secret, {
        expiresIn: "120s",
      });

      // Respond with a success message and the token
      res.json({ success: true, token });
    });
  });
};

module.exports = login;
