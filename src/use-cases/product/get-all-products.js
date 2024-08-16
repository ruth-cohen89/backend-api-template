const { productDb } = require("../../data-access");

const getAllProducts = async () => {
  // Fetch all products from the database
  const products = await productDb.getAll();
  return products;
};

module.exports = getAllProducts;
