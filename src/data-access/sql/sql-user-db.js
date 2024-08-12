// data-access/sql-user-db.js
const UserDbInterface = require("./user-db-interface");
const User = require("./domain/entities/user");
const db = require("../config/sqlDatabase"); // Assume you have a SQL database connection

class SqlUserDb extends UserDbInterface {
  async findById(id) {
    const result = await db.query("SELECT * FROM users WHERE id = ?", [id]);
    return result[0]
      ? new User(result[0].id, result[0].name, result[0].email)
      : null;
  }

  async findAll() {
    const results = await db.query("SELECT * FROM users");
    return results.map((row) => new User(row.id, row.name, row.email));
  }

  async create(user) {
    const result = await db.query(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [user.name, user.email]
    );
    return new User(result.insertId, user.name, user.email);
  }

  async update(user) {
    await db.query("UPDATE users SET name = ?, email = ? WHERE id = ?", [
      user.name,
      user.email,
      user.id,
    ]);
    return user;
  }

  async delete(id) {
    await db.query("DELETE FROM users WHERE id = ?", [id]);
  }
}

module.exports = SqlUserDb;
