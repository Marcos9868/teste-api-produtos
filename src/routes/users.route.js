const Router = require('express')
const userRepository = require('../repositories/user.repository')

const usersRoute = Router()

// Lista usuários cadastrados
usersRoute.get('/users', async(req, res, next) => {
  const users = await userRepository.findAllUsers()
  res.status(200).send(users)
})

// Lista um usuário cadastrado em específico
usersRoute.get('/users/:uuid', async(req, res, next) => {
  try {
    const uuid = req.params.uuid
    const user = await userRepository.findUserByUUID(uuid)
    res.status(200).send(user)
  } catch (error) {
    next(error)
  }
})

// Cadastra um usuário no banco de dados
usersRoute.post('/users', async(req, res, next) => {
  const newUser = req.body
  const uuid = await userRepository.createUser(newUser)
  res.status(201).send(uuid)
})

// Login do usuário
usersRoute.post('/login', async(req, res, next) => {
  
})

// Altera os dados do usuário cadastrado e atualiza no banco
usersRoute.put('/users/:uuid', async(req, res, next) => {
  try {
    const uuid = req.params.uuid
    const modifiedUser = req.body
    res.status(200).send(modifiedUser)

    await userRepository.updateUser(modifiedUser)
  } catch (error) {
    next(error)
  }
})

// Remove um usuário do banco de dados
usersRoute.delete('/users/:uuid', async(req, res, next) => {
  try {
    const uuid = req.params.uuid
    await userRepository.removeUser()
    res.status(200).send('User Removed')
  } catch (error) {
    next(error)
  }
})

// Remove todos os usuários cadastrados
usersRoute.delete('/users', async(req, res, next) => {
  const users = await userRepository.removeUsers()
  res.status(200).send('All Users Removed')
})

module.exports = usersRoute