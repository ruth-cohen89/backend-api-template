const Joi = require("joi");

const userSchema = Joi.object({
  username: Joi.string()
    .min(3)
    .max(30)
    .required()
    .error(
      new Error(
        "Username is required and should be between 3 and 30 characters."
      )
    ),
  email: Joi.string()
    .email()
    .required()
    .error(new Error("A valid email is required.")),
  password: Joi.string()
    .min(6)
    .required()
    .error(
      new Error(
        "Password is required and should be at least 6 characters long."
      )
    ),
  createdAt: Joi.date().default(() => new Date(), "time of creation"),
  updatedAt: Joi.date().default(() => new Date(), "time of update"),
});

const validateUser = (user) => {
  const { error } = userSchema.validate(user, { abortEarly: false });
  return error
    ? { error: error.details.map((err) => err.message).join(". ") }
    : {};
};

module.exports = validateUser;
