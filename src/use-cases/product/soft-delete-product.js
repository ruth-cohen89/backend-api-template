const { productDb } = require("../../data-access");
const CustomError = require("../../utils/customError");

const softDeleteProduct = async (productId) => {
  const product = await productDb.getById(productId);
  if (!product) throw new CustomError("product not found.", 404);

  if (product.isDeleted) {
    throw new CustomError("Product has already been deleted.", 400);
  }

  const updated = await productDb.update(productId, {
    isDeleted: true,
    deletedAt: Date.now(),
  });

  return updated;
};

module.exports = softDeleteProduct;
