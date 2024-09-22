const { productDb } = require("../../data-access");
const CustomError = require("@/utils/customError");

const hardDeleteProduct = async (productId) => {
  if (!productId) {
    throw new CustomError("Product ID is required.", 400);
  }

  const deleted = await productDb.delete(productId);
  if (!deleted) {
    throw new CustomError("Product not found.", 404);
  }
  return deleted;
};

module.exports = hardDeleteProduct;
