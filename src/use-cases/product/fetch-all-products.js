const { productDb } = require("../../data-access");

const fetchAllProducts = async (includeDeleted) => {
  const filter = includeDeleted ? {} : { isDeleted: false };

  const products = await productDb.getAll(filter);
  return products;
};

module.exports = fetchAllProducts;
