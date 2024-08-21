const Joi = require("joi");
// TODO: Add a strict validation for checking the id type based on db type

const validateCreateUser = Joi.object({
  body: Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.string().optional(),
    createdAt: Joi.date().default(Date.now),
  }).required(),
  params: Joi.object().optional(),
  query: Joi.object().optional(),
}).options({ abortEarly: false });

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

const validateDeleteUser = Joi.object({
  params: Joi.object({
    id: Joi.string().required().error(new Error("ID is required")),
  }).required(),
  body: Joi.object().optional(),
  query: Joi.object().optional(),
});

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
