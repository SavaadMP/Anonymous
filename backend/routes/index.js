const express = require("express");
const app = express.Router();

const { RegisterUser } = require("../controllers/authController");

app.post("/register", RegisterUser);

module.exports = app;
