const db = require('../model/model.js')

const getUsers = (req, res) => {
    const users = 'select * from users'
    db.query(users, (err, result) => {
        if (err) throw err
        res.send(result)
    })
}


const getUser = (req, res) => {
    const {id} = req.params
    const user = `select * from users where user_id = ${id}`
    db.query(user, (err, result) => {
        if (err) throw err
        res.send(result)
    })
}

const addUser = (req, res) => {
    let {fname, lname, address, telephone, email, pass} = req.body
    let user = `insert into users (fname, lname, address, telephone, email, pass) values('${fname}', '${lname}', '${address}', '${telephone}', '${email}', '${pass}')`
    db.query(user, (err, result) => {
        if (err) throw err
        res.send(result)
    })
}

const updateUser = (req, res) => {
    let {id} = req.params
    let {fname, lname, address, telephone, email, pass} = req.body
    let user = `update users set fname = '${fname}', lname = '${lname}', address = '${address}', telephone = '${telephone}', email = '${email}', pass = '${pass}' where user_id = ${id}`
    db.query(user, (err, result) => {
        if (err) throw err
        res.send(result)
    })
}

const deleteUser = (req, res) => {
    let {id} = req.params
    let user = `delete from users where user_id = ${id}`
    db.query(user, (err, result) => {
        if (err) throw err
        res.send(result)
    })
}






module.exports = {getUsers, getUser, updateUser, addUser, deleteUser}