const express = require("express");
require("dotenv").config();
const config = require("config");
const errorHandler = require("../middleware/errorHandler");
const routes = require("./routes");

const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const xssClean = require("xss-clean");
const rateLimit = require("express-rate-limit");

const app = express();
app.use(helmet());
app.use(xssClean());

app.use(
  cors({
    origin: config.get("origin"),
    credentails: true, // Allows cookies and authentication headers
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Parse the JSON-encoded data from the request body and makes it available on req.body
// Reject requests with a JSON body larger than 15 megabytes to prevent (DoS) attacks or server overload
app.use(bodyParser.json({ limit: "15mb" }));
app.use(bodyParser.urlencoded({ limit: "15mb", extended: true }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  // 1000ms = 1sec, 60sec = 1min
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use(limiter);

app.use(routes);

app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server 🙄`);
  error.status = 404;
  next(error);
});

app.use(errorHandler);

module.exports = app;
