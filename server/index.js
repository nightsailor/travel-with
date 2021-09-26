const express = require("express");
const morgan = require("morgan");

const bodyParser = require("express").json;

const db = require('./db');
const authRouter = require("./routes/auth-router");

const app = express()
const apiPort = 5000

app.use(bodyParser());
app.use(morgan("common"));

app.use("/api/auth", authRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
