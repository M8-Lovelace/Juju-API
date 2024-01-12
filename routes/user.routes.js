import { Router } from "express";

const routerUser = Router();

// Route, validations, controller
routerUser.post("/");
routerUser.get("/login");

export { routerUser };
