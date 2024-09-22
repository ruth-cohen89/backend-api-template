const Joi = require("joi");

const validateCreateProduct = Joi.object({
  body: Joi.object({
    name: Joi.string().required(),
    price: Joi.number().positive().required(),
    description: Joi.string().optional().allow(""),
  }).required(),
  params: Joi.object().optional(),
  query: Joi.object().optional(),
});

const validateUpdateProduct = Joi.object({
  params: Joi.object({
    id: Joi.string().required().error(new Error("ID is required")),
  }).required(),
  body: Joi.object({
    name: Joi.string().optional(),
    price: Joi.number().positive().optional(),
    description: Joi.string().optional().allow(""),
  })
    .min(1)
    .optional(),
  query: Joi.object().optional(),
});

const validateDeleteProduct = Joi.object({
  params: Joi.object({
    id: Joi.string().required().error(new Error("ID is required")),
  }).required(),
  body: Joi.object().optional(),
  query: Joi.object().optional(),
});

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
