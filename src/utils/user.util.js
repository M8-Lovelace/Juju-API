import User from "../models/User.js";

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

export { userHelper }