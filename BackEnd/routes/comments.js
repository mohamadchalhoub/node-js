const express = require("express");
const router = express.Router();
const {
  addComment,
  getComments,
  getComment,
  deleteComment,
  updateComment,
} = require("../controllers/commentsController.js");

router.get("/", getComments)
// router.get("/:id", getComment)
// router.delete('/:id', deleteComment)
// router.put('/:id', updateComment)
router.post("/", addComment)

module.exports = router;
