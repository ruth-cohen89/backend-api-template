const { productDb } = require("../../data-access");

const createProduct = async (productData) => {
  // Add business logic here (e.g., validation)
  const productId = await productDb.createProduct(productData);
  return productId;
};

module.exports = createProduct;
