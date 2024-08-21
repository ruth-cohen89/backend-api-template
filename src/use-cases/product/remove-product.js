const { productDb } = require("../../data-access");

const removeProduct = async (productId) => {
  if (!productId) {
    throw new Error("User ID is required.");
  }
  const deleted = await productDb.delete(productId);
  if (!deleted) {
    throw new Error("Product not found or not deleted.");
  }
  return deleted;
};

module.exports = removeProduct;
