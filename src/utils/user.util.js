import User from "../models/User.js";
import bcrypt from "bcryptjs";

const userHelper = {}

userHelper.uniqueEmail = async (email) => {
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      throw new Error();
    }
  } catch (error) {
    throw new Error("El usuario ya existe por email");
  }
};

userHelper.validateIfUserExist = async (email) => {
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error();
    }
  } catch (error) {
    throw new Error("El usuario no existe");
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
    throw new Error("El password no es correcto");
  }
};

export { userHelper }