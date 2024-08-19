const Joi = require("joi");

// Validation for creating a user
const validateCreateUser = Joi.object({
  body: Joi.object({
    username: Joi.string().required().error(new Error("Username is required")),
    email: Joi.string()
      .email()
      .required()
      .error(new Error("Valid email is required")),
    password: Joi.string().required().error(new Error("Password is required")),
    role: Joi.string().optional(),
    createdAt: Joi.date().default(Date.now),
    //updatedAt: Joi.date().default(Date.now),
  }).required(),
  params: Joi.object().optional(),
  query: Joi.object().optional(),
});

// Validation for updating a user
const validateUpdateUser = Joi.object({
  params: Joi.object({
    id: Joi.string().required().error(new Error("ID is required")),
  }).required(),
  body: Joi.object({
    username: Joi.string().optional(),
    email: Joi.string().email().optional(),
    password: Joi.string().optional(),
    role: Joi.string().optional(),
    createdAt: Joi.date().optional(),
    //updatedAt: Joi.date().optional(),
  })
    .min(1)
    .optional(),
  query: Joi.object().optional(),
});

// Validation for deleting a user
const validateDeleteUser = Joi.object({
  params: Joi.object({
    id: Joi.string().required().error(new Error("ID is required")),
  }).required(),
  body: Joi.object().optional(),
  query: Joi.object().optional(),
});

// Validation for getting a user
const validateGetUser = Joi.object({
  params: Joi.object({
    id: Joi.string()
      .required()
      .error(new Error("ID is required and must be a valid string.")),
  }).required(),
  body: Joi.object().optional(),
  query: Joi.object().optional(),
});

module.exports = {
  validateCreateUser,
  validateUpdateUser,
  validateDeleteUser,
  validateGetUser,
};
