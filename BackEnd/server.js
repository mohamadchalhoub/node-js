require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const usersRoute = require('./routes/users')
const blogsRoute = require('./routes/blogs')
const commentsRoute = require('./routes/comments')
const loginRoute = require('./routes/login')
const logoutRoute = require('./routes/logout')
const registerRouter = require('./routes/register')
app.use(cors())


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json())


app.use('/users', usersRoute)
app.use('/blogs', blogsRoute)
app.use('/comments', commentsRoute)
app.use('/login', loginRoute)
app.use('/logout', logoutRoute)
app.use('/register', registerRouter)


app.listen(process.env.port, () => {
    console.log("server is listening on port", process.env.port)
})