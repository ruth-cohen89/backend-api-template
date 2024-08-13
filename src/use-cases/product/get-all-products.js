const productDB = require("../../data-access/sql/product-db");

const getAllProducts = async () => {
  // Fetch all products from the database
  const products = await productDB.getAllProducts();
  return products;
};

module.exports = getAllProducts;
