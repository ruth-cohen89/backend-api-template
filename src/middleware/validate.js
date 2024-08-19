const validate = (schema) => (req, res, next) => {
  try {
    // Destructure body, query, and params from the request
    const { body, query, params } = req;
    const input = { body, query, params };

    // Validate the input against the schema
    const { error } = schema.validate(input, { abortEarly: false });

    if (!error) {
      next();
    } else {
      // Check if error has a message field
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
