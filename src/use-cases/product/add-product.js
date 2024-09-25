const { productDb } = require("../../data-access");

const addProduct = async (productData) => {
  const productId = await productDb.create(productData);
  return productId;
};

module.exports = addProduct;
