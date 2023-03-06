const express = require('express')
const router = express.Router()
const db = require('../model/blogModel')
const {
    getCategories,
    getCategory,
    createCategory,
    deleteCategory,
    updateCategory
} = require('../controllers/blogCategoryController')

router.get('/', getCategories)

router.get('/:id', getCategory)

router.post('/', createCategory)

router.patch('/:id', updateCategory)

router.get('/:id', deleteCategory)

module.exports = router