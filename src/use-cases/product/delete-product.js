const deleteProduct = async (productDB, productId) => {
  // Add business logic here (e.g., checking if productId is valid)
  await productDB.deleteProduct(productId);
};

module.exports = deleteProduct;
