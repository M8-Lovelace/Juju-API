import { Router } from "express";
import userValidation from "../validations/user.validation.js";
import userController from "../controller/user.controller.js";

const routerUser = Router();

// Route, validations, controller
routerUser.post("/", userValidation.createValidation, userController.create);
routerUser.post("/login", userValidation.loginValidation, userController.login);

export { routerUser };
