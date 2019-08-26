'use strict'
const sql = require('../db')

const ShoppingCentre = function(sc) {
  this.name = sc.name
  this.address = sc.address
  this.created_at = new Date()
}
ShoppingCentre.getShoppingCentres = cb => {
  const query = 'SELECT * FROM shopping_centres ORDER BY id ASC'

  sql.query(query, (err, res) => {
    if (err) cb({error: true, message: 'cannot retrieve shopping centres'})
    return cb({
      error: false,
      data: res,
      message: 'get all shopping centres'
    })
  })
}

ShoppingCentre.createShoppingCentre = (data, cb) => {
  let query = 'INSERT INTO shopping_centres SET ?'

  sql.query(query, data, (err, res) => {
    if (err) cb({error: true, message: 'cannot create a shopping centre'})
    return cb({
      error: false,
      data: res.insertId,
      message: 'shopping centre created'
    })
  })
}

ShoppingCentre.updateShoppingCentre = (id, data, cb) => {
  let query = 'UPDATE shopping_centres SET ? WHERE id = ?'

  sql.query(query, [data, id], (err, res) => {
    if (err) cb({error: data, message: 'cannot update the shopping centre'})
    return cb({
      error: false,
      data: res.affectedRows,
      message: 'shopping centre updated'
    })
  })
}

ShoppingCentre.removeShoppingCentre = (id, cb) => {
  let query = 'DELETE FROM shopping_centres WHERE id = ?'

  sql.query(query, [id], (err, res) => {
    if (err) cb({error: id, message: 'cannot delete the shopping centre'})
    return cb({
      error: false,
      data: res,
      message: 'shopping centre deleted'
    })
  })
}

module.exports = ShoppingCentre
