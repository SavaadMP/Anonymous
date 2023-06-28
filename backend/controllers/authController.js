const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "3d",
  });
};

const RegisterUser = async (req, res) => {
  const { username, email, password, usercode } = req.body;

  try {
    const user = await User.signup(username, email, password, usercode);
    const { username, email, usercode } = user;
    const token = createToken(user._id);
    res.status(200).json({ username, email, usercode, token });
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

module.exports = { RegisterUser };
