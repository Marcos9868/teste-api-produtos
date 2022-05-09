class DatabaseError extends Error {
  constructor(message, error) {
    super(message)

    this.message = message
    this.error = error
  }
}
module.exports = DatabaseError