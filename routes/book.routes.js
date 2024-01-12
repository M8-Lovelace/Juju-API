import { Router } from "express";
import bookValidation from "../validations/book.validation.js";
import bookController from "../controller/book.controller.js";
import webToken from "../middlewares/jwt.middleware.js";

const routerBook = Router();

// End point to create a book
routerBook.post("/", [webToken.validateToken], bookController.create);

// End point to get a book
routerBook.get("/:id", [webToken.validateToken, bookValidation.getIdValidation], bookController.getBookById);

// End point to get all books
routerBook.get("/", [webToken.validateToken], bookController.getAll);

// End point to delete a book
routerBook.delete("/:id", [webToken.validateToken, bookValidation.deleteValidation], bookController.delete);

// End point to update a book
routerBook.put("/:id", [webToken.validateToken, bookValidation.updateValidation], bookController.update);

// End point to search a book by title
routerBook.get("/search/:title", [webToken.validateToken, bookValidation.searchBookValidation], bookController.searchBookByTitle);

export { routerBook };
