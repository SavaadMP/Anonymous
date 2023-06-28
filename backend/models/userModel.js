const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

// * creating schema for user
const userSchema = new Schema({
  username: {
    type: "String",
    required: true,
  },
  email: {
    type: "String",
    required: true,
    unique: true,
  },
  password: {
    type: "String",
    required: true,
  },
  usercode: {
    type: "String",
    required: true,
  },
});

// * static signup method!!
userSchema.statics.signup = async function (
  username,
  email,
  password,
  usercode
) {
  console.log({ username, email, password, usercode });
  if (!username || !email || !password || !usercode) {
    throw Error("all fields must be entered!!");
  }
  // * checking email is valid
  if (!validator.isEmail(email)) {
    throw Error("enter a valid email!!");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("enter a strong password!!");
  }

  const existEmail = await this.findOne({ email });
  if (existEmail) throw Error("email already in use!!");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // * adding the user to password
  const user = await this.create({
    username,
    email,
    password: hashedPassword,
    usercode,
  });

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) throw Error("All Feilds must be filled!!");

  const user = await this.findOne({ email: email });
  if (!user) throw Error("Incorrect Email!!");

  const matchPassword = await bcrypt.compare(password, user.password);
  if (!matchPassword) throw Error("Incorrect Password!!");

  return user;
};

module.exports = mongoose.model("User", userSchema);
