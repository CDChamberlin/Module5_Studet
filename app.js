const express = require("express");
const app = express();

const calcRoutes = require("./routes/calcRoutes");

app.use("/calculator", calcRoutes);
module.exports = app;
