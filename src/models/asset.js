'use strict'
const sql = require('../db')

const Asset = function(asset) {
  this.name = asset.name
  this.dimension = asset.dimension
  this.location = asset.location
  this.status = 0
  this.shopping_centre_id = asset.shopping_centre_id
  this.created_at = new Date()
}
Asset.getAllAssets = cb => {
  const query = 'SELECT * FROM assets ORDER BY id ASC'

  sql.query(query, (err, res) => {
    if (err) cb({error: true, message: 'cannot retrieve assets'})
    return cb({
      error: false,
      data: res,
      message: 'get all assets'
    })
  })
}

Asset.createAsset = (data, cb) => {
  let query = 'INSERT INTO assets SET ?'

  sql.query(query, data, (err, res) => {
    if (err) cb({error: true, message: 'cannot create an asset'})
    return cb({
      error: false,
      data: res.insertId,
      message: 'asset created'
    })
  })
}

Asset.updateAsset = (id, data, cb) => {
  let query = 'UPDATE assets SET ? WHERE id = ?'

  sql.query(query, [data, id], (err, res) => {
    if (err) cb({error: data, message: 'cannot update the asset'})
    return cb({
      error: false,
      data: res.affectedRows,
      message: 'the asset updated'
    })
  })
}

Asset.removeAsset = (id, cb) => {
  let query = 'DELETE FROM assets WHERE id = ?'

  sql.query(query, [id], (err, res) => {
    if (err) cb({error: id, message: 'cannot delete the asset'})
    return cb({
      error: false,
      data: res,
      message: 'the asset deleted'
    })
  })
}

module.exports = Asset
