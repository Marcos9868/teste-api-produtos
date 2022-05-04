const db = require('../db/config')
const Product = require('../models/product.model')

class productRepository {
  async findAllProducts() {
    const query = `
      SELECT * FROM products_list
    `;

    const { rows } = await db.query(query)

    return rows || []
  }

  async findProductByUUID(uuid) {
    const query = `
      SELECT * FROM products_list
      WHERE uuid = $1
    `

    const values = [uuid]

    const { rows } = await db.query(query, values)
    const [ product ] = rows

    return product || []
  }

  async createProduct(product) {
    const query = `
      INSERT INTO products_list
      (name, description, price, quantity)
      VALUES ($1, $2, $3, $4)
      RETURNING uuid
    `

    const values = [product.name, product.description, product.price, product.quantity]

    const { rows } = await db.query(query, values)
    const [ newProduct ] = rows

    return newProduct.uuid
  }

  async updateProduct(product) {
    const script = `
      UPDATE products_list SET
      name = $1,
      description = $2,
      price = $3,
      quantity = $4
      WHERE uuid = $5
    `

    const values = [product.name, product.description, product.price, product.quantity, product.uuid]

    const { rows } = await db.query(script, values)
  }

  async removeProduct(uuid) {
    const script = `
      DELETE FROM products_list
      WHERE uuid = $1
    `

    const values = [uuid]
    await db.query(script, values)
  }

  async removeProducts() {
    const script = `
      TRUNCATE TABLE products_list
    `

    await db.query(script)
  }
}

module.exports = new productRepository()