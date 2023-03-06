const express = require('express')
const router = express.Router()
const db = require('../model/blogModel.js')
const {
    getBlogs,
    getBlog,
    createBlog,
    deleteBlog,
    updateBlog
} = require('../controllers/blogController')


router.get('/', getBlogs)

router.post('/', createBlog)

router.get('/:id', getBlog)

router.delete('/:id', deleteBlog)

router.patch('/:id', updateBlog)


module.exports = router