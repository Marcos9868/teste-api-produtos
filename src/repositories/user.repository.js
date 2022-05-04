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

  async createUser(user) {
    const script = `
      INSERT INTO users_list 
      (name, email, password)
      VALUES ($1, $2, crypt($3, 'my_salt'))
      RETURNING uuid
    `

    const values = [user.name, user.email, user.password]
    const { rows } = await db.query(script, values)
    const [ newUser ] = rows

    return newUser.uuid
  }

  async loginUser() {

  }

  async updateUser(user) {
    const script = `
      UPDATE users_list SET
      name = $1,
      email = $2,
      password = crypt($3, 'my_salt')
      WHERE uuid = $4
    `

    const values = [user.name, user.email, user.password, user.uuid]
    await db.query(script, values)
  }

  async removeUser(uuid) {
    const script = `
      DELETE FROM users_list
      WHERE uuid = $1
    `

    const values = [uuid]

    await db.query(script, values)
  }

  async removeUsers() {
    const script = `
      TRUNCATE TABLE users_list
    `

    await db.query(script)
  }

}

module.exports = new userRepository()
