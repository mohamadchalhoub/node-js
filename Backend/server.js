require('dotenv').config()

const express = require('express')
const app = express()
const blogsRoutes = require('./routes/blogs')
const usersRoutes = require('./routes/users')
const blogCategoriesRoutes = require('./routes/blogCategory')
const commentsRoutes = require('./routes/comments')
const db = require('./model/blogModel')
const morgan = require('morgan')

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/blogs', blogsRoutes)

app.use('/users', usersRoutes)

app.use('/blogCategory', blogCategoriesRoutes)

app.use('/comments', commentsRoutes)


    app.listen(process.env.PORT, () => {
        console.log('server is listening on port', process.env.PORT)
    })


