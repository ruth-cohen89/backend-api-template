function product(name, price, description, createdAt, isDeleted, deletedAt) {
  return {
    getName: () => name,
    getPrice: () => price,
    getDescription: () => description,
    getCreatedAt: () => createdAt,
    getisDeleted: () => isDeleted,
    getdeletedAt: () => deletedAt,
  };
}

module.exports = product;
