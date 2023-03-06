const db = require('../model/blogModel.js')

const getComments = (req,res) => {
    let getComments = `SELECT * FROM commenttable`
    db.query(getComments, (err, result) => {
        if (err) throw err
        res.send(result)
    })
}

const getComment = (req,res) => {
    let {id} = req.params
    let getComment = `SELECT * FROM commenttable WHERE comment_id = ${id}`
    db.query(getComment, (err, result) => {
        if (err) throw err
        res.send(result)
    })
}

const deleteComment = (req,res) => {
    let {id} = req.params
    let deleteComment = `DELETE FROM commenttable WHERE comment_id = ${id}`
    db.query(deleteComment, (err, result) => {
        if (err) throw err
        res.send(result)
    })

}

const updateComment = (req,res) => {
    let {id} = req.params
    let {content} = req.body
    let updateComment = `UPDATE commenttable SET content = '${content}' WHERE comment_id = ${id}`
    db.query(updateComment, (err, result) => {
        if (err) throw err
        res.send(result)
    })
}

const createComment = (req,res) => {
    let {content} = req.body
    let createComment = `INSERT INTO commenttable (content) VALUES ('${content}')`
    db.query(createComment, (err, result) => {
        if (err) throw err
        res.send(result)
    })
}

module.exports = {
    getComments,
    getComment,
    deleteComment,
    updateComment,
    createComment

}