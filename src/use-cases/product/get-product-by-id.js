const productDB = require("../../data-access/sql/product-db");

const getProductById = async (productId) => {
  // Add business logic here (e.g., checking if productId is valid)
  const product = await productDB.getProductById(productId);
  return product;
};

module.exports = getProductById;
