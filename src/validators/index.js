const {
  validateCreateUser,
  validateUpdateUser,
  validateDeleteUser,
  validateGetUser,
  validateLoginUser,
  validateSignupUser,
  validateUpdateMe,
  validateUpdateMyPassword,
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
  validateUpdateMe,
  validateUpdateMyPassword,
  validateCreateProduct,
  validateUpdateProduct,
  validateDeleteProduct,
  validateGetProduct,
};
