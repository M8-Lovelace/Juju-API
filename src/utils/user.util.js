import bcrypt from "bcryptjs";
import User from "../models/User.js";

const userHelper = {}

userHelper.uniqueEmail = async (email) => {
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      throw new Error();
    }
  } catch (error) {
    throw new Error("Email already exist");
  }
};

userHelper.validateIfUserExist = async (email) => {
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error();
    }
  } catch (error) {
    throw new Error("The user does not exist");
  }
};

userHelper.validatePassword = async (email, password) => {
  try {
    const passwordUser = await bcrypt.hash(password, 10);
    const user = await User.findOne({ email: email, password: passwordUser });
    if (!user) {
      throw new Error();
    }
  } catch (error) {
    throw new Error("The password is incorrect");
  }
};

export { userHelper };
