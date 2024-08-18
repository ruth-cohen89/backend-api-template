const Joi = require("joi");

// Validator for creating a product
const validateCreateProduct = Joi.object({
  body: Joi.object({
    name: Joi.string().required().error(new Error("Product name is required")),
    price: Joi.number()
      .positive()
      .required()
      .error(
        new Error("Product price is required and must be a positive number")
      ),
    description: Joi.string().optional().allow(""),
    createdAt: Joi.date()
      .default(() => new Date(), "current date")
      .optional(),
  }),
  params: Joi.object(),
  query: Joi.object(),
});

// Validator for updating a product
const validateUpdateProduct = Joi.object({
  params: Joi.object({
    id: Joi.string().required().error(new Error("Product ID is required")),
  }),
  body: Joi.object({
    name: Joi.string().optional(),
    price: Joi.number().positive().optional(),
    description: Joi.string().optional().allow(""),
    createdAt: Joi.date().optional(),
  }),
  query: Joi.object(),
});

// Validator for deleting a product
const validateDeleteProduct = Joi.object({
  params: Joi.object({
    id: Joi.string().required().error(new Error("Product ID is required")),
  }),
  body: Joi.object(),
  query: Joi.object(),
});

// Validator for getting a product by ID
const validateGetProduct = Joi.object({
  params: Joi.object({
    id: Joi.string()
      .required()
      .error(new Error("ID is required and must be a valid string.")),
  }),
  body: Joi.object(),
  query: Joi.object(),
});

module.exports = {
  validateCreateProduct,
  validateUpdateProduct,
  validateDeleteProduct,
  validateGetProduct,
};
