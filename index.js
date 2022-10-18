const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const config = require("config");
const serverRoutes = require("./routes/index.js");

const app = express();

// Use middlewares
app.use(morgan("dev"));
app.use(express.json());

// Log the api call on server
app.use((req, res, next) => {
  const apiInfo = `${req.method} ${res.statusCode} ${req.url}`;
  console.log(`API HIT ${apiInfo}`, `\n|\nv\n|\nv\n|\nv`);
  next();
});

// Mongoo DB connectivity
const url = config.get("DB_URL");
mongoose
  .connect(url)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    throw err;
  });

// Fetch the server port
const PORT = process.env.PORT || 3001;

app.use("/api", serverRoutes);

// This should be the last route else any after it won't work
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "This route not present on server",
  });
});

// Handling the other errors
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message,
    error: {
      statusCode: err.statusCode || 500,
      message: "Server error",
    },
  });
});

app.listen(PORT, () =>
  console.log(`===========Server up on port ${PORT}============`, `\n`)
);
