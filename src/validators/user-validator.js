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
    createdAt: Joi.date().default(Date.now),
    updatedAt: Joi.date().default(Date.now),
  }),
  params: Joi.object(), // No params needed for creation
  query: Joi.object(), // No query parameters for creation
});

// Validation for updating a user
const validateUpdateUser = Joi.object({
  params: Joi.object({
    id: Joi.string().required().error(new Error("ID is required")),
  }),
  body: Joi.object({
    username: Joi.string().optional(),
    email: Joi.string().email().optional(),
    password: Joi.string().optional(),
    createdAt: Joi.date().optional(),
    updatedAt: Joi.date().optional(),
  }).min(1), // Ensure at least one field is present
  query: Joi.object(), // No query parameters for update
});

// Validation for deleting a user
const validateDeleteUser = Joi.object({
  params: Joi.object({
    id: Joi.string().required().error(new Error("ID is required")),
  }),
  body: Joi.object(), // No body needed for deletion
  query: Joi.object(), // No query parameters for deletion
});

// Validation for getting a user
const validateGetUser = Joi.object({
  params: Joi.object({
    id: Joi.string()
      .required()
      .error(new Error("ID is required and must be a valid string.")),
  }),
  body: Joi.object(), // No body needed for getting a user
  query: Joi.object(), // Optionally, you can validate query parameters if needed
});

module.exports = {
  validateCreateUser,
  validateUpdateUser,
  validateDeleteUser,
  validateGetUser,
};
