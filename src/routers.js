const express = require('express')

const router = express.Router()
const ShoppingCentre = require('./models/shopping_centre')
const Asset = require('./models/asset')

/* Shopping Centre Router */
router.get('/shopping_centres', (req, res) => {
  ShoppingCentre.getShoppingCentres(data => {
    const result = data.error ? data.message : data.data
    res.json(result)
  })
})
router.post('/shopping_centres', (req, res) => {
  const sc = new ShoppingCentre(req.body)
  if (!sc.name && !sc.address) {
    return res
      .status(400)
      .send({error: true, message: 'Please provide valid shopping centre info'})
  }
  ShoppingCentre.createShoppingCentre(sc, data => {
    const result = data.error ? data.message : data.data
    res.json(result)
  })
})
router.put('/shopping_centres/:shoppingCentreId', (req, res) => {
  const id = req.params.shoppingCentreId
  const sc = req.body
  if (!id || !sc) {
    return res.status(400).send({
      error: true,
      message: 'Please provide valid shopping centre id and data'
    })
  }
  ShoppingCentre.updateShoppingCentre(id, sc, data => {
    const result = data.error ? data.message : data.data
    res.json(result)
  })
})
router.delete('/shopping_centres/:shoppingCentreId', (req, res) => {
  const id = req.params.shoppingCentreId
  if (!id) {
    return res.status(400).send({
      error: true,
      message: 'Please provide valid shopping centre id'
    })
  }
  ShoppingCentre.removeShoppingCentre(id, data => {
    const result = data.error ? data.message : data.data
    res.json(result)
  })
})

/* Asset Router */
router.get('/assets', (req, res) => {
  Asset.getAllAssets(data => {
    const result = data.error ? data.message : data.data
    res.json(result)
  })
})
router.post('/assets', (req, res) => {
  const asset = new Asset(req.body)
  console.log(asset, 'asset')
  if (
    !asset.name &&
    !asset.dimension &&
    !asset.location &&
    !asset.shopping_centre_id
  ) {
    return res
      .status(400)
      .send({error: true, message: 'Please provide valid asset data'})
  }
  Asset.createAsset(asset, data => {
    const result = data.error ? data.message : data.data
    res.json(result)
  })
})
router.put('/assets/:assetId', (req, res) => {
  const id = req.params.assetId
  const asset = req.body
  if (!id || !asset) {
    return res.status(400).send({
      error: true,
      message: 'Please provide valid asset id and data'
    })
  }
  Asset.updateAsset(id, asset, data => {
    const result = data.error ? data.message : data.data
    res.json(result)
  })
})
router.delete('/assets/:assetId', (req, res) => {
  const id = req.params.assetId
  if (!id) {
    return res.status(400).send({
      error: true,
      message: 'Please provide valid an asset id'
    })
  }
  Asset.removeAsset(id, data => {
    const result = data.error ? data.message : data.data
    res.json(result)
  })
})

module.exports = router
