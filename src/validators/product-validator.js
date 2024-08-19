const Joi = require("joi");

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
    createdAt: Joi.date().default(Date.now).optional(),
  }).required(),
  params: Joi.object().optional(),
  query: Joi.object().optional(),
});

// Validator for updating a product
const validateUpdateProduct = Joi.object({
  params: Joi.object({
    id: Joi.string().required().error(new Error("Product ID is required")),
  }).required(),
  body: Joi.object({
    name: Joi.string().optional(),
    price: Joi.number().positive().optional(),
    description: Joi.string().optional().allow(""),
    createdAt: Joi.date().optional(),
  }).optional(),
  query: Joi.object().optional(),
});

// Validator for deleting a product
const validateDeleteProduct = Joi.object({
  params: Joi.object({
    id: Joi.string().required().error(new Error("Product ID is required")),
  }).required(),
  body: Joi.object().optional(),
  query: Joi.object().optional(),
});

// Validator for getting a product by ID
const validateGetProduct = Joi.object({
  params: Joi.object({
    id: Joi.string()
      .required()
      .error(new Error("ID is required and must be a valid string.")),
  }).required(),
  body: Joi.object().optional(),
  query: Joi.object().optional(),
});

module.exports = {
  validateCreateProduct,
  validateUpdateProduct,
  validateDeleteProduct,
  validateGetProduct,
};
