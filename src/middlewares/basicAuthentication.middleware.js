const ForbiddenError = require('../models/errors/forbidden.error.model')
const userRepository = require('../repositories/user.repository')
const productRepository = require('../repositories/product.repository')

async function basicAuthentication (req, res, next) {
  try {
    const authorizationHeader = req.headers['authorization']
    console.log(authorizationHeader)

    if (!authorizationHeader) {
      throw new ForbiddenError('Uniformed Credentials')
    }

    const [authenticationType, token] = authorizationHeader.split(' ')

    if (authenticationType !== 'Basic' || !token) {
      throw new ForbiddenError('Invalid Authentication Type')
    }

    const tokenContent = Buffer.from(token, 'base64').toString('utf-8')

    const [email, password] = tokenContent.split(':')

    if(!email || !password) {
      throw new ForbiddenError('Unfilled credentials')
    }

    const user = await userRepository.findUserByEmailAndPassword(email, password)

    if (!user) {
      throw new ForbiddenError('Invalid User')
    }

    req.user = user

    next()

  } catch (error) {
    next(error)
  }
}

module.exports = basicAuthentication