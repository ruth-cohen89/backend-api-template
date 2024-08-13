const productDB = require("../../data-access/sql/product-db");

const removeProduct = async (productId) => {
  // Add business logic here (e.g., checking if productId is valid)
  await productDB.deleteProduct(productId);
};

module.exports = removeProduct;
