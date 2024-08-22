const { productDb } = require("../../data-access");

const createProduct = async (productData) => {
  const productId = await productDb.create(productData);
  return productId;
};

module.exports = createProduct;
