const productDB = require("../data-access/product-db");

const createProduct = async (productData) => {
  // Add business logic here (e.g., validation)
  const productId = await productDB.createProduct(productData);
  return productId;
};

module.exports = createProduct;
