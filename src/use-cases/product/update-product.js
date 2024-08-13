const updateProduct = async (productDB, productId, productData) => {
  // Add business logic here (e.g., validation)
  await productDB.updateProduct(productId, productData);
};

module.exports = updateProduct;
