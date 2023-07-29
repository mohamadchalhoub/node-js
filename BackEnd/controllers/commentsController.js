const db = require('../model/model')


const getComments = (req, res) => {
    db.query(`select * from comment`, (err, result) => {
        if(err) throw err
        res.send(result)
    })
}

const getComment = (req, res) => {
    const {id} = req.params
    db.query(`select * from comment where comment_id = ${id}`, (err, result) => {
        if (err) throw err
        res.send(result)
    })
}

const addComment = (req, res) => {
    const {content} = req.body
    db.query(`insert into comment (content) values('${content}')`, (err, result) => {
        if(err) throw err
        res.send(result)
    })
}

const deleteComment = (req, res) => {
    const {id} = req.params
    db.query(`delete from comment where comment_id = ${id}`, (err, result) => {
        if(err) throw err
        res.send(result)
    })
}

const updateComment = (req, res) => {
    const {id} = req.params
    let {content} = req.body
    db.query(`update comment set content = '${content}' where comment_id = ${id}`, (err, result) => {
        if(err) throw err
        res.send(result)
    })
}

module.exports = {
    addComment,
    getComments,
    getComment,
    deleteComment,
    updateComment
}