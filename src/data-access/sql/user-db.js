class UserSQLDB {
  constructor(connection) {
    this.connection = connection;
  }

  async createUser(user) {
    const { name, email } = user;
    const [result] = await this.connection.execute(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email]
    );
    return result.insertId;
  }

  async getUserById(id) {
    const [rows] = await this.connection.execute(
      "SELECT * FROM users WHERE id = ?",
      [id]
    );
    return rows[0];
  }

  async updateUser(id, user) {
    const { name, email } = user;
    const [result] = await this.connection.execute(
      "UPDATE users SET name = ?, email = ? WHERE id = ?",
      [name, email, id]
    );
    return result.affectedRows > 0;
  }

  async deleteUser(id) {
    const [result] = await this.connection.execute(
      "DELETE FROM users WHERE id = ?",
      [id]
    );
    return result.affectedRows > 0;
  }

  async getAllUsers() {
    const [rows] = await this.connection.execute("SELECT * FROM users");
    return rows;
  }
}

module.exports = UserSQLDB;
