const express = require("express");
const app = express.Router();

const { RegisterUser, LoginUser } = require("../controllers/authController");

app.post("/register", RegisterUser);
app.post("/login", LoginUser);

module.exports = app;
