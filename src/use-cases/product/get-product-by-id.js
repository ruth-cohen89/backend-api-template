const { productDb } = require("../../data-access");

const getProductById = async (productId) => {
  // Add business logic here (e.g., checking if productId is valid)
  const product = await productDb.getProductById(productId);
  return product;
};

module.exports = getProductById;
