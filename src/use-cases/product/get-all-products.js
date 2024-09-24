const { productDb } = require("../../data-access");

const getAllProducts = async () => {
  const products = await productDb.getAll({ isDeleted: false });
  return products;
};

module.exports = getAllProducts;
