const express = require("express");
const app = express.Router();

const { RegisterUser } = require("../controllers/authController");

app.get("/", RegisterUser);

module.exports = app;
