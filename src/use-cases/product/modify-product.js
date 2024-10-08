const { productDb } = require("../../data-access");
const CustomError = require("@/utils/customError");

const modifyProduct = async (productId, productData) => {
  if (!productId) {
    throw new CustomError("Product ID is required.", 400);
  }

  const allowedFields = ["name", "price", "description"];

  const filteredUpdateData = {};
  Object.keys(productData).forEach((key) => {
    if (allowedFields.includes(key)) {
      filteredUpdateData[key] = productData[key];
    }
  });

  const updated = await productDb.update(productId, filteredUpdateData);

  if (!updated) {
    throw new CustomError("Product not found or has been deleted.", 404);
  }
  return updated;
};

module.exports = modifyProduct;
