class Product {
  constructor(name, price, description, createdAt = new Date()) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.createdAt = createdAt;
  }
}

module.exports = Product;
