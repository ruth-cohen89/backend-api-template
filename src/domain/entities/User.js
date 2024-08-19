const buildMakeUser = () => {
  return function makeUser({
    name,
    email,
    password,
    createdAt = new Date(),
    updatedAt = new Date(),
  }) {
    // Validate the input if necessary here, or assume it's handled elsewhere
    return Object.freeze({
      getName: () => name,
      getEmail: () => email,
      getPassword: () => password,
      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt,
    });
  };
};

module.exports = buildMakeUser;
