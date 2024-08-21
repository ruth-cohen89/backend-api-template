// data-access/sql/product-db.js
class ProductSQLDB {
  constructor(connection) {
    this.connection = connection;
  }

  async createProduct(product) {
    const { name, price } = product;
    const [result] = await this.connection.execute(
      "INSERT INTO products (name, price) VALUES (?, ?)",
      [name, price]
    );
    return result.insertId;
  }

  async getProductById(id) {
    const [rows] = await this.connection.execute(
      "SELECT * FROM products WHERE id = ?",
      [id]
    );
    return rows[0];
  }

  async updateProduct(id, product) {
    const { name, price } = product;
    const [result] = await this.connection.execute(
      "UPDATE products SET name = ?, price = ? WHERE id = ?",
      [name, price, id]
    );
    return result.affectedRows > 0;
  }

  async deleteProduct(id) {
    const [result] = await this.connection.execute(
      "DELETE FROM products WHERE id = ?",
      [id]
    );
    return result.affectedRows > 0;
  }

  async getAllProducts() {
    const [rows] = await this.connection.execute("SELECT * FROM products");
    return rows;
  }
}

module.exports = ProductSQLDB;
