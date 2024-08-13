const getAllProducts = async (productDB) => {
  // Fetch all products from the database
  const products = await productDB.getAllProducts();
  return products;
};

module.exports = getAllProducts;
