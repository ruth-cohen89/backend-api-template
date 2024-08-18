const { productDb } = require("../../data-access");

const updateProduct = async (productId, productData) => {
  if (!productId) {
    throw new Error("User ID is required.");
  }
  const updated = await productDb.update(productId, productData);
  if (!updated) {
    throw new Error("Product not found or not updated.");
  }
  return updated;
};

module.exports = updateProduct;
