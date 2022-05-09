// Importação dos módulos da API
const express = require('express')
const productsRoute = require('./routes/products.route')
const statusRoute = require('./routes/status.route')
const usersRoute = require('./routes/users.route')
const errorHandler = require('./middlewares/error.handler.middleware')

// Instância do Express
const app = express()

//Configuração DB
const db = require('./db/config')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Rotas
app.use(statusRoute) // Status da API
app.use(productsRoute)  // Rota de produtos
app.use(usersRoute)  // Rota de usuários
app.use(errorHandler)  // Rota dos modelos de erros

// Porta do servidor
app.listen(4000, () => {
  console.log('Servidor em http://localhost:4000')
})