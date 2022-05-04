const Router = require('express')
const productRepository = require('../repositories/product.repository')

const productsRoute = Router()

productsRoute.get('/products', async (req, res) => {
  const products = await productRepository.findAllProducts()
  res.status(200).send(products)
})

productsRoute.get('/products/:uuid', async (req, res, next) => {
  try {
    const uuid = req.params.uuid
    const product = await productRepository.findProductByUUID(uuid)
    res.status(200).send(product)
    console.log(product)
  } catch (error) {
    next(error)
  }  
})

productsRoute.post('/products', async (req, res, next) => {
  const newProduct = req.body
  const uuid = await productRepository.createProduct(newProduct)
  res.status(200).send(uuid)
  console.log(uuid, newProduct)
})

productsRoute.put('/products/:uuid', async (req, res, next) => {
  try {
    const uuid = req.params.uuid
    const modifiedProduct = req.body
    res.status(200).send(modifiedProduct)
    modifiedProduct.uuid = uuid

    await productRepository.updateProduct(modifiedProduct)
  } catch (error) {
    next(error)
  }
})

productsRoute.delete('/products/:uuid', async(req, res, next) => {
  try {
    const uuid = req.params.uuid
    await productRepository.removeProduct(uuid)
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})

productsRoute.delete('/products', async (req, res) => {
  await productRepository.removeProducts()
  res.status(200).send('All products removed')
})

module.exports = productsRoute