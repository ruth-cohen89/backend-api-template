const { productDb } = require("../../data-access");
const CustomError = require("@/utils/customError");

const getProductById = async (productId) => {
  const product = await productDb.getById(productId);
  if (!product) {
    throw new CustomError("Product not found", 404);
  }
  return product;
};

module.exports = getProductById;
