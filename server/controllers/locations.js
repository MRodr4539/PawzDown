const mysql = require('mysql')
const pool = require('../SQL/connection')
const { handleSQLError } = require('../SQL/error')
 

const getAllUsers = (req, res) =>{
 // SELECT ALL USERS
 pool.query("SELECT * FROM locationList", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getUserById = (req, res) => {
  // SELECT USERS WHERE ID = <REQ PARAMS ID>
  //SELECT id, first, last FROM users WHERE id = ${id}
  let sql = `SELECT ??, ??, ?? FROM ?? WHERE ?? = ${req.params.id}`
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, ['id', 'fullName', 'address', 'locationName', 'locationType', 'leash', 'water', 'bagStation', 'locationIs', 'comments' ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const createUser = (req, res) => {
 
  pool.query('INSERT INTO locationList SET ?', {fullName: 'Test User', address: '123 Test Lane, Austin TX 78701', locationName: 'Zilker Park', locationType: 'Park', leash: 'either', water: 'Bring your own', bagStation: 'Yes they have it ccovered', locationIs: 'Open', comments: 'Lots of open space for your pup to roam.' }, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}



module.exports = {
  getAllUsers,
  getUserById,
  createUser,
}