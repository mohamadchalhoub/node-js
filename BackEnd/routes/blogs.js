const express = require("express");
const router = express.Router();
const verifyToken = require('../middleware/authMiddelware')
const {
  getBlogs,
  addBlog,
  getBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogsController");

router.get('/', verifyToken, getBlogs);
router.get('/:id', getBlog);
router.post('/', addBlog);
router.patch('/:id', updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;
