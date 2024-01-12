import { Router } from "express";
import bookValidation from "../validations/book.validation.js";

const routerBook = Router();

// End point to create a book
routerBook.post("/");

// End point to get a book
routerBook.get("/:id", [bookValidation.getIdValidation]);

// End point to get all books
routerBook.get("/");

// End point to delete a book
routerBook.delete("/:id", [bookValidation.deleteValidation]);

// End point to update a book
routerBook.put("/:id", [bookValidation.updateValidation]);

// End point to search a book by title
routerBook.get("/search/:title", [bookValidation.searchBookValidation]);

export { routerBook };
