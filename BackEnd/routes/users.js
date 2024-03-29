const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController.js");

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", addUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router
