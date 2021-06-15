const app = require("../app");
const userRouter = require("express").Router();
const User = require("../models/user.js");
const bcrypt = require("bcryptjs");
const errorENUM = require("../utils/errorENUM");

// Create user
userRouter.post("/", async (request, response, next) => {
  const { username, name, password } = request.body;

  const saltRounds = 10;

  try {
    if (!password) throw errorENUM.ERR05;
    if (password.length < 3) {
      throw new error('password length must be greater than 3')
    };
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
      username,
      name,
      passwordHash,
    });

    const savedUser = await user.save();

    response.json(savedUser);
  } catch (err) {    
    next(err);
  }
});

// Get users
userRouter.get("/", async (request, response, next) => {
  try {
    const result = await User.find({}).populate("blogs");
    response.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = userRouter;
