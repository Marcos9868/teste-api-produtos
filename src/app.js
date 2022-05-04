const express = require('express')
const productsRoute = require('./routes/products.route')
const statusRoute = require('./routes/status.route')

const app = express()

//Configuração DB
const db = require('./db/config')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Rotas
app.use(statusRoute)
app.use(productsRoute)

app.listen(4000, () => {
  console.log('Servidor em http://localhost:4000')
})