const { productDb } = require("../../data-access");

const getAllProducts = async () => {
  // Fetch all products from the database
  const products = await productDb.getAllProducts();
  return products;
};

module.exports = getAllProducts;
