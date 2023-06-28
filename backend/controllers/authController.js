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
    const token = createToken(user._id);
    res.status(200).json({ username, email, usercode, token });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const LoginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res
      .status(200)
      .json({ email, token, username: user.username, usercode: user.usercode });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { RegisterUser, LoginUser };
