const db = require('../model/model')


const getBlogs = (req, res) => {
    const blogs = 'select * from blogs'
    db.query(blogs, (err, result) => {
        if (err) throw err
        res.send(result)
    })
}

const getBlog = (req, res) => {
    const {id} = req.params
    const blog = `select * from blogs where blog_id = ${id}`
    db.query(blog, (err, result) => {
        if (err) throw err
        res.send(result)
    })
}

const addBlog = (req, res) => {
    const {title, body, author} = req.body
    const blog = `insert into blogs (title, body, author) values('${title}', '${body}', '${author}')`
    db.query(blog, (err, result) => {
        if (err) throw err
        res.send(result)
    })
}

const updateBlog = (req, res) => {
    const {id} = req.params
    let {title, body, author} = req.body
    let blog = `update blogs set title = '${title}', body = '${body}', author = '${author}' where blog_id = ${id}`
    db.query(blog, (err, result) => {
        if (err) throw err
        res.send(result)
    })
}

// const updateBlog = (req, res) => {
//     const id = req.params.id
//     const updatedBlog = req.body
//         db.query('update blogs set ? where blog_id = ?', [updatedBlog, id], (error, result) => {
//         if (error) {
//             console.error('error updating data:', error)
//             res.sendStatus(500)
//         } else {
//             console.log('data updated successfully', result)
//             res.send(result)
//         }
//     })
// }

const deleteBlog = (req, res) => {
    const id = req.params.id
    db.query(`delete from blogs where blog_id = ?`, id, (error, result) => {
        if (error) {
            console.error('error deleting data:', error)
            res.sendStatus(500)
        } else {
            console.log('data deleted successfully', result)
            res.sendStatus(200)
        }
    })
}
// pool.query('DELETE FROM data WHERE id = ?', id, (error, results, fields) => {
//     if (error) {
//       console.error('Error deleting data:', error);
//       res.sendStatus(500);
//     } else {
//       console.log('Data deleted successfully:', results);
//       res.sendStatus(200);
//     }
//   });

// const deleteBlog = (req, res) => {
//     const {id} = req.params
//     let blog = `delete from blogs where blog_id = ${id}`
//     db.query(blog, (err, result) => {
//         if (err) throw err
//         res.send(result)
//     })
// }

module.exports = {getBlogs, addBlog, getBlog, updateBlog, deleteBlog}