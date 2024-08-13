const createProduct = async (productDB, productData) => {
  // Add business logic here (e.g., validation)
  const productId = await productDB.createProduct(productData);
  return productId;
};

module.exports = createProduct;
