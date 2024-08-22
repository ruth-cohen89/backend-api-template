const { productDb } = require("../../data-access");

const getAllProducts = async () => {
  const products = await productDb.getAll();
  return products;
};

module.exports = getAllProducts;
