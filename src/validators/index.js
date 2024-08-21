const {
  validateCreateUser,
  validateUpdateUser,
  validateDeleteUser,
  validateGetUser,
} = require("./user-validator");

const {
  validateCreateProduct,
  validateUpdateProduct,
  validateDeleteProduct,
  validateGetProduct,
} = require("./product-validator");

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
