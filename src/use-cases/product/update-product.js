const { productDb } = require("../../data-access");

const updateProduct = async (productId, productData) => {
  // Add business logic here (e.g., validation)
  await productDb.updateProduct(productId, productData);
};

module.exports = updateProduct;
