import User from "../models/User.js";
import bcrypt from "bcryptjs";
import webToken from "../middlewares/jwt.middleware.js";

const userController = {};

userController.login = async (request, response) => {
  try {
    const { email, password } = request.body;
    const user = await User.findOne({
      email,
    });

    if (!user) {
      return response.status(200).json({
        errors: [{
          msg: "User not found",
        }]
      });
    }

    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return response.status(200).json({
        errors: [{
          msg: "Password is incorrect",
        }]
      });
    }

    const token = await webToken.generateToken(user);

    response.status(200).json({ data: { token } });

  } catch (error) {
    response.status(500).json({ message: error });
  }
};

userController.create = async (request, response) => {
  try {
    const { email, password } = request.body;
    const user = new User({
      email,
      password,
    })
    user.password = await bcrypt.hash(password, 10);
    await user.save();
    response.status(201).json(user);
  } catch (error) {
    response.status(500).json({ message: error });
  }
};

userController.findAll = async (request, response) => {
  try {
    const users = await User.find();
    response.status(200).json(users);
  } catch (error) {
    response.status(500).json({ message: error });
  }
};

export default userController;
