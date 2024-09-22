const { productDb } = require("../../data-access");
const CustomError = require("@/utils/customError");

const getProductById = async (productId) => {
  if (!productId) {
    throw new CustomError("Product ID is required.", 400);
  }
  const product = await productDb.getById(productId);
  if (!product) {
    throw new CustomError("Product not found", 404);
  }
  return product;
};

module.exports = getProductById;
