const express = require('express')
const router = express.Router()
const db = require('../model/blogModel')

const {
    getComments,
    getComment,
    deleteComment,
    updateComment,
    createComment
} = require('../controllers/commentController')

router.get('/', getComments)

router.get('/:id', getComment)

router.delete('/:id', deleteComment)

router.patch('/:id', updateComment)

router.post('/:id', createComment)

module.exports = router