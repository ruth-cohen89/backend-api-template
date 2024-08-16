const { productDb } = require("../../data-access");

const getProductById = async (productId) => {
  // Add business logic here (e.g., checking if productId is valid)
  const product = await productDb.getById(productId);
  return product;
};

module.exports = getProductById;
