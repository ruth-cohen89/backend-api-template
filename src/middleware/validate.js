const validate = (schema) => (req, res, next) => {
  try {
    const { body, query, params } = req;
    const input = { body, query, params };
    const { error } = schema.validate(input, { abortEarly: false });
    if (!error) {
      next();
    } else {
      const errorMessage = error.message || "Validation error";

      console.error("Validation error:", errorMessage);
      return res.status(400).json({ error: errorMessage });
    }
  } catch (e) {
    console.error("Error:", e);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = validate;
