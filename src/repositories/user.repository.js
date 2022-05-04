const db = require('../db/config')
const User = require('../models/user.model')

class userRepository {
  async findAllUsers() {
    const query = `
      SELECT uuid, name, email FROM users_list
    `

    const { rows } = await db.query(query)

    return rows || []
  }

  async findUserByUUID(uuid) {
    const query = `
      SELECT uuid, name, email FROM users_list
      WHERE uuid = $1
    `

    const values = [uuid]
    const { rows } = await db.query(query, values)
    const [ user ] = rows

    return user || []
  }

}

module.exports = new userRepository()
