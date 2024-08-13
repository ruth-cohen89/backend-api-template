const productDB = require("../../data-access/sql/product-db");

const updateProduct = async (productId, productData) => {
  // Add business logic here (e.g., validation)
  await productDB.updateProduct(productId, productData);
};

module.exports = updateProduct;
