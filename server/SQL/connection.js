const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: '35.239.28.218',
        user: 'root',
        password: 'Franklin22@',
        database: 'pawzdown',
        debug: false
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;