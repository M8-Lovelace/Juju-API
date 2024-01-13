import { check } from "express-validator";
import { userHelper } from "../utils/user.util.js";
import { validateField } from "../middlewares/validateField.middleware.js";

const userValidation = {};

const { uniqueEmail, validateIfUserExist } = userHelper;

// Create user
userValidation.createValidation = [
  check("email", "Email is required").exists(),
  check("email", "Email is not valid").isEmail(),
  check("email").custom(async (email) => {
    await uniqueEmail(email);
  }),
  validateField,
]

// Login user
userValidation.loginValidation = [
  check("email", "Email is required").exists(),
  check("email", "Email is not valid").isEmail(),
  check("email").custom(async (email) => {
    await validateIfUserExist(email);
  }),
  check("password", "Password is required").exists(),
  check("password", "Password is not valid").isLength({ min: 8 }),
  validateField,
]

export default userValidation;
