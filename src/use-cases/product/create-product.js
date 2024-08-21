const { productDb } = require("../../data-access");

const createProduct = async (productData) => {
  // Add business logic here (e.g., validation)
  const productId = await productDb.create(productData);
  return productId;
};

module.exports = createProduct;
