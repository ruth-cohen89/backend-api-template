function product(name, price, description, createdAt) {
  return {
    getName: () => name,
    getPrice: () => price,
    getDescription: () => description,
    getCreatedAt: () => createdAt,
  };
}

module.exports = product;
