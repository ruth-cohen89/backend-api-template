const Joi = require("joi");

const validateCreateUser = Joi.object({
  body: Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.string().valid("admin", "user").optional(),
  }).required(),
  params: Joi.object().optional(),
  query: Joi.object().optional(),
}).options({ abortEarly: false });

const validateGetUser = Joi.object({
  params: Joi.object({
    id: Joi.string()
      .required()
      .error(new Error("ID is required and must be a valid string.")),
  }).required(),
  body: Joi.object().optional(),
  query: Joi.object().optional(),
});

const validateUpdateUser = Joi.object({
  params: Joi.object({
    id: Joi.string().required().error(new Error("User ID is required")),
  }).required(),
  body: Joi.object({
    username: Joi.string().optional(),
    email: Joi.string().email().optional(),
    password: Joi.string().optional(),
    role: Joi.string().optional(),
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

const validateSignupUser = Joi.object({
  body: Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }).required(), // Ensure body is required
  params: Joi.object().optional(),
  query: Joi.object().optional(),
}).options({ abortEarly: false });

const validateUpdateMyPassword = Joi.object({
  body: Joi.object({
    oldPassword: Joi.string().required(),
    newPassword: Joi.string().required(),
    username: Joi.forbidden().error(
      new Error(
        "Username cannot be updated here. Please use the 'update /me' route to update your username."
      )
    ),
    email: Joi.forbidden().error(
      new Error(
        "Email cannot be updated here. Please use the 'update /me' route to update your email."
      )
    ),
  }).required(),
  params: Joi.object().optional(),
  query: Joi.object().optional(),
}).options({ abortEarly: false });

const validateLoginUser = Joi.object({
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }).required(),
  params: Joi.object().optional(),
  query: Joi.object().optional(),
}).options({ abortEarly: false });

const validateUpdateMe = Joi.object({
  body: Joi.object({
    username: Joi.optional(),
    email: Joi.forbidden().error(
      new Error("Email cannot be updated in this route.")
    ),
    password: Joi.forbidden().error(
      new Error("Password cannot be updated in this route.")
    ),
  })
    .min(1)
    .required(),
  params: Joi.object().optional(),
  query: Joi.object().optional(),
}).options({ abortEarly: false });

module.exports = {
  validateCreateUser,
  validateSignupUser,
  validateLoginUser,
  validateUpdateUser,
  validateDeleteUser,
  validateGetUser,
  validateUpdateMe,
  validateUpdateMyPassword,
};
