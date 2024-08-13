// infrastructure/sql/mysql-connection.js
const mysql = require("mysql2/promise");

class MySQLConnection {
  constructor(config) {
    this.config = config;
    this.connection = null;
  }

  async connect() {
    this.connection = await mysql.createConnection(this.config);
  }

  getConnection() {
    if (!this.connection) {
      throw new Error(
        "Connection has not been established. Call connect() first."
      );
    }
    return this.connection;
  }

  async disconnect() {
    if (this.connection) {
      await this.connection.end();
    }
  }
}

module.exports = MySQLConnection;
