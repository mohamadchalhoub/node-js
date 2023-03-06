const db = require('../model/blogModel.js')

const getUsers = (req, res) => {
    const users = 'SELECT * FROM userstable'
    db.query(users, (err, result) => {
        if(err) throw err
        res.send(result)
    })
}

const getUser = (req, res) => {
    const {id} = req.params
    const user = `SELECT * FROM userstable WHERE user_id = ${id}`
    db.query(user, (err, result) => {
        if (err) throw err
        res.send(result)
    })
}

const createUser = (req, res) => {
    let { fname, lname, address, telephone, email, password } = req.body
    let user = `INSERT INTO userstable (fname, lname, address, telephone, email, password) VALUES ('${fname}', '${lname}', '${address}', '${telephone}', '${email}', '${password}')`
    db.query(user, (err, result) => {
        if (err) throw err
        res.send(result)
    })
}

const updateUser = (req, res) => {
    const {id} = req.params
    let { fname, lname, address, telephone, email, password } = req.body
    let user = `UPDATE userstable SET fname = '${fname}', lname = '${lname}', address = '${address}', telephone = ${telephone}, email = '${email}', password = '${password}' WHERE user_id = ${id}`
    db.query(user, (err, result) => {
        if (err) throw err
        res.send(result)
    })
}

const deleteUser = (req, res) => {
    let {id} = req.params
    let user = `DELETE FROM userstable WHERE user_id = ${id} `
    db.query(user, (err, result) => {
        if (err) throw err
        res.send(result)
    })
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}