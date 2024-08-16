const { productDb } = require("../../data-access");

const removeProduct = async (productId) => {
  // Add business logic here (e.g., checking if productId is valid)
  await productDb.delete(productId);
};

module.exports = removeProduct;
