const { productDb } = require("../../data-access");
const CustomError = require("@/utils/customError");

const updateProduct = async (productId, productData) => {
  if (!productId) {
    throw new CustomError("Product ID is required", 400);
  }
  const updated = await productDb.update(productId, productData);
  if (!updated) {
    throw new CustomError("Product not found", 404);
  }
  return updated;
};

module.exports = updateProduct;
