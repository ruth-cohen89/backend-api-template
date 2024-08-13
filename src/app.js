const express = require("express");
require("dotenv").config();
const config = require("config");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes");

//const AppError = require("./src/utils/appError");
//const globalErrorHandler = require("./src/middlewares/errorHandlerMiddleware.js");

const app = express();

app.use(
  cors({
    origin: config.get("origin"),
    credentails: true,
  })
);

// app.use((req, res, next) => {
//   console.info(
//     `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
//   );
//   next();
// });

// Parse the JSON-encoded data from the request body and makes it available on req.body
// Reject requests with a JSON body larger than 15 megabytes to prevent (DoS) attacks or server overload
app.use(bodyParser.json({ limit: "15mb" }));

// Parse URL-encoded data, when clients send data through forms
// true: allows rich objects and arrays, max 15 mb
// app.use(bodyParser.urlencoded({ limit: "15mb", extended: true }));

app.use("/api", router); // All routes will be prefixed with /api/v1

app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server 🙄`);
  error.status = 404;
  next(error);
  //next(new AppError(`Can't find ${req.originalUrl} on the server 🙄`, 404));
});

app.use((err, req, res, next) => {
  //console.err(err);
  res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
});

//app.use(globalErrorHandler);

module.exports = app;
