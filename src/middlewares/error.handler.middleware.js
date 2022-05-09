const ForbiddenError = require('../models/errors/forbidden.error.model')
const DatabaseError = require('../models/errors/database.error.model')

const errorHandler = (error, req, res, next) => {
  if (error instanceof DatabaseError) {
    res.sendStatus(400)
  } else if (error instanceof ForbiddenError) {
    res.sendStatus(403)
  } else {
    res.sendStatus(500)
  }
}

module.exports = errorHandler