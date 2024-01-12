import { Router } from "express";

const routerBook = Router();

// End point to create a book
routerBook.post("/");

// End point to get a book
routerBook.get("/:id");

// End point to get all books
routerBook.get("/");

// End point to delete a book
routerBook.delete("/:id");

// End point to update a book
routerBook.put("/:id");

// End point to search a book by title
routerBook.get("/search/:title");

export { routerBook };
