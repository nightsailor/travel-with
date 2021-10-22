const express = require("express");
const morgan = require("morgan");

const bodyParser = require("express").json;

const db = require('./db');
const authRouter = require("./routes/auth-router");

const app = express()
const apiPort = process.env.PORT || 5000; // Step 1

app.use(bodyParser());
app.use(morgan("common"));

// Step 3
if (process.env.NODE_ENV === 'production') {
  app.use(express.static("public"));
}

app.use("/api/auth", authRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
