const {
  validateCreateUser,
  validateUpdateUser,
  validateDeleteUser,
  validateGetUser,
} = require("./userValidator");

const {
  validateCreateProduct,
  validateUpdateProduct,
  validateDeleteProduct,
  validateGetProduct,
} = require("./productValidator");

module.exports = {
  validateCreateUser,
  validateUpdateUser,
  validateDeleteUser,
  validateGetUser,
  validateCreateProduct,
  validateUpdateProduct,
  validateDeleteProduct,
  validateGetProduct,
};
