const express = require('express')
const router = express.Router()
const db = require('../model/blogModel')
const {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser
} = require('../controllers/userController')

router.get('/', getUsers)

router.get('/:id', getUser)

router.post('/', createUser)

router.patch('/:id', updateUser)

router.delete('/:id', deleteUser)

module.exports = router