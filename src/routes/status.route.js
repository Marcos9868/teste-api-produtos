const Router = require('express')

const statusRoute = Router()

statusRoute.get('/status', (req, res) => {
  res.status(200).send({ name: 'API Produtos', version: 0.1, author: 'Marcos M. Ferreira' })
})

module.exports = statusRoute