const db = require('../model/blogModel.js')

const getCategories = (req, res) => {
    let blogCategories = 'SELECT * FROM blogscategoriestable'
    db.query(blogCategories, (err, result) => {
        if (err) throw err 
        res.send(result)
    })
}

const getCategory = (req,res) => {
    let {id} = req.params
    let blogCategory = `SELECT * FROM blogscategoriestable WHERE category_id = ${id}`
    db.query(blogCategory, (err, result) => {
        if (err) throw err
        res.send(result)
    })
}

const deleteCategory = (req, res) => {
    let {id} = req.params
    let deleteCategory = `DELETE FROM blogscategoriestable WHERE category_id = ${id}`
    db.query(deleteCategory, (err, result) => {
        if (err) throw err
        res.send(result)
    })
}

const updateCategory = (req,res) => {
    let {id} = req.params
    let {categoryName} = req.body
    let updateCategory = `UPDATE blogscategoriestable SET categoryName = '${categoryName}'`
    db.query(updateCategory, (err, result) => {
        if (err) throw err
        res.send(result)
    })
}

const createCategory = (req,res) => {
    let {categoryName} = req.body
    let createCategory = `INSERT INTO blogscategoriestable (categoryName) VALUES ('${categoryName}')`
    db.query(createCategory, (err, result) => {
        if (err) throw err
        res.send(result)
    })
}

module.exports = {
    getCategories,
    getCategory,
    deleteCategory,
    updateCategory,
    createCategory
}