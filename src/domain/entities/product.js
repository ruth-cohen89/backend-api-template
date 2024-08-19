//  buildMakeProduct is a function factory
// makeProduct is a factory function
const buildMakeProduct = () => {
  return function makeProduct({
    name,
    price,
    description,
    createdAt = new Date(),
  }) {
    return Object.freeze({
      getName: () => name,
      getPrice: () => price,
      getDescription: () => description,
      getCreatedAt: () => createdAt,
    });
  };
};
