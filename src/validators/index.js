const {
  validateCreateUser,
  validateUpdateUser,
  validateDeleteUser,
  validateGetUser,
  validateLoginUser,
  validateSignupUser,
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
  validateSignupUser,
  validateLoginUser,
  validateCreateProduct,
  validateUpdateProduct,
  validateDeleteProduct,
  validateGetProduct,
};
