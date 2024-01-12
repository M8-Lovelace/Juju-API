import { Router } from "express";
import userValidation from "../validations/user.validation.js";

const routerUser = Router();

// Route, validations, controller
routerUser.post("/", userValidation.createValidation);
routerUser.get("/login", userValidation.loginValidation,);

export { routerUser };
