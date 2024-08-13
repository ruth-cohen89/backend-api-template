const productDB = require("../data-access/product-db");

const deleteProduct = async (productId) => {
  // Add business logic here (e.g., checking if productId is valid)
  await productDB.deleteProduct(productId);
};

module.exports = deleteProduct;
