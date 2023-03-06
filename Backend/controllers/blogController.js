const db = require('../model/blogModel')

//get all blogs
const getBlogs = (req, res) => {
    const blogs = 'SELECT * FROM blogs'
    db.query(blogs, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
}

//get a single blog
const getBlog = (req, res) => {
    const {id} = req.params
    let blog = `SELECT * FROM blogs WHERE blog_id = ${id}`
    db.query(blog, (err, result) => {
        if (err) throw err
        res.send(result)
    })
}

//create a new blog
const createBlog = (req, res) => {
    let { blog_id, title, date_created, body, author, user_id } = req.body
    let blog = `INSERT INTO blogs (blog_id, title, date_created, body, author, user_id) VALUES (${blog_id}, '${title}', '${date_created}', '${body}', '${author}', ${user_id})`
    db.query(blog, (err, result) => {
        if (err) throw err
        res.send(result)
    })
}

//update a blog
const updateBlog = (req, res) => {
    let {id} = req.params
    let { title, date_created, body, author, user_id } = req.body
    let blog = `UPDATE blogs SET title = '${title}', date_created = '${date_created}', body = '${body}', author = '${author}', user_id = ${user_id} WHERE blog_id = ${id}`
    db.query(blog, (err, result) => {
        if (err) throw err
        res.send(result)
    })
}

//delete blog
const deleteBlog = (req, res) => {
    const {id} = req.params
    const blog = `DELETE FROM blogs WHERE blog_id = ${id} `
    db.query(blog, (err, result) => {
        if (err) throw err
        res.send(result)
    })
}

module.exports = {
    getBlog,
    getBlogs,
    createBlog,
    updateBlog,
    deleteBlog
}