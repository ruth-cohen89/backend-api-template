// TODO: לתקן את כל הקובץ ולכתוב פונקציות חדשות
class UserSQLDB {
  constructor(connection) {
    this.connection = connection;
  }

  async createUser(user) {
    const { username, email } = user;
    const [result] = await this.connection.execute(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [username, email]
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
    const { username, email } = user;
    const [result] = await this.connection.execute(
      "UPDATE users SET name = ?, email = ? WHERE id = ?",
      [username, email, id]
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
