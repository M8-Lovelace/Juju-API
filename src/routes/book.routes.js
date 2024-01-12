import { Router } from "express";
import bookValidation from "../validations/book.validation.js";
import bookController from "../controller/book.controller.js";
import webToken from "../middlewares/jwt.middleware.js";

const routerBook = Router();

/**
 * @swagger
 * tags:
 *   name: Book
 *   description: The books managing API
 * /api/book:
 *   post:
 *     summary: Create a new book
 *     tags: [Book]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BookCreateBody'
 *     responses:
 *       201:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BookCreate'
 *       500:
 *         description: Some server error
 * components:
 *   schemas:
 *     BookCreate:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - year
 *         - status
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of your book
 *         author:
 *           type: string
 *           description: The book author
 *         year:
 *           type: string
 *           description: The year of the book
 *         status:
 *           type: boolean
 *           description: Whether you have finished reading the book
 *         __v:
 *           type: string
 *           description: The auto-generated control version
 *       example:
 *         _id: 65a19d626ca05e1bc0075c05
 *         title: El principito
 *         author: Juju
 *         year: "2020"
 *         status: true
 *         __v: 0
 *     BookCreateBody:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - year
 *       properties:
 *         title:
 *           type: string
 *           description: The title of your book
 *         author:
 *           type: string
 *           description: The book author
 *         year:
 *           type: string
 *           description: The year of the book
 *       example:
 *         title: El principito
 *         author: Juju
 *         year: "2020"
 */
routerBook.post("/", [webToken.validateToken], bookController.create);


/**
 * @swagger
 * tags:
 *   name: Book
 *   description: The books managing API
 * /api/book/{id}:
 *   get:
 *     summary: Search a book by id
 *     tags: [Book]
 *     responses:
 *       200:
 *         description: The found book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BookSearchById'
 *       500:
 *         description: Some server error
 * components:
 *   schemas:
 *     BookSearchById:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - year
 *         - status
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of your book
 *         author:
 *           type: string
 *           description: The book author
 *         year:
 *           type: string
 *           description: The year of the book
 *         status:
 *           type: boolean
 *           description: Whether you have finished reading the book
 *         __v:
 *           type: string
 *           description: The auto-generated control version
 *       example:
 *         _id: 65a19d626ca05e1bc0075c05
 *         title: El principito
 *         author: Juju
 *         year: "2020"
 *         status: true
 *         __v: 0
 */
routerBook.get("/:id", [webToken.validateToken, bookValidation.getIdValidation], bookController.getBookById);


/**
 * @swagger
 * tags:
 *   name: Book 
 *   description: The books managing API
 * /api/book/:
 *   get:
 *     summary: Search all books
 *     tags: [Book]
 *     responses:
 *       200:
 *         description: The founds books.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/BookSearchAll'
 *       500:
 *         description: Some server error
 * components:
 *   schemas:
 *     BookSearchAll:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - year
 *         - status
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of your book
 *         author:
 *           type: string
 *           description: The book author
 *         year:
 *           type: string
 *           description: The year of the book
 *         status:
 *           type: boolean
 *           description: Whether you have finished reading the book
 *         __v:
 *           type: string
 *           description: The auto-generated control version
 *       example:
 *         _id: 65a19d626ca05e1bc0075c05
 *         title: El principito
 *         author: Juju
 *         year: "2020"
 *         status: true
 *         __v: 0
 */
routerBook.get("/", [webToken.validateToken], bookController.getAll);


/**
 * @swagger
 * tags:
 *   name: Book
 *   description: The books managing API
 * /api/book/{id}:
 *   delete:
 *     summary: Delete a book by id
 *     tags: [Book]
 *     responses:
 *       200:
 *         description: The found book to delete.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BookDelete'
 *       500:
 *         description: Some server error
 * components:
 *   schemas:
 *     BookDelete:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of your book
 *         author:
 *           type: string
 *           description: The book author
 *         year:
 *           type: string
 *           description: The year of the book
 *         status:
 *           type: boolean
 *           description: Whether you have finished reading the book
 *         __v:
 *           type: string
 *           description: The auto-generated control version
 *       example:
 *         _id: 65a19d626ca05e1bc0075c05
 *         title: El principito
 *         author: Juju
 *         year: "2020"
 *         status: true
 *         __v: 0
 */
routerBook.delete("/:id", [webToken.validateToken, bookValidation.deleteValidation], bookController.delete);


/**
 * @swagger
 * tags:
 *   name: Book
 *   description: The books managing API
 * /api/book/{id}:
 *   put:
 *     summary: Update a book by id
 *     tags: [Book]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BookUpdateBody'
 *     responses:
 *       200:
 *         description: The found book to update.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BookUpdate'
 *       500:
 *         description: Some server error
 * components:
 *   schemas:
 *     BookUpdate:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - year
 *         - status
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of your book
 *         author:
 *           type: string
 *           description: The book author
 *         year:
 *           type: string
 *           description: The year of the book
 *         status:
 *           type: boolean
 *           description: Whether you have finished reading the book
 *         __v:
 *           type: string
 *           description: The auto-generated control version
 *       example:
 *         _id: 65a19d626ca05e1bc0075c05
 *         title: El principito
 *         author: Juju
 *         year: "2020"
 *         status: true
 *         __v: 0
 *     BookUpdateBody:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - year
 *       properties:
 *         title:
 *           type: string
 *           description: The title of your book
 *         author:
 *           type: string
 *           description: The book author
 *         year:
 *           type: string
 *           description: The year of the book
 *       example:
 *         title: El principito
 *         author: Juju
 *         year: "2020"
 */
routerBook.put("/:id", [webToken.validateToken, bookValidation.updateValidation], bookController.update);


/**
 * @swagger
 * tags:
 *   name: Book
 *   description: The books managing API
 * /api/search/{title}:
 *   get:
 *     summary: Search a book by title
 *     tags: [Book]
 *     responses:
 *       200:
 *         description: The book was found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BookSearchTitle'
 *       500:
 *         description: Some server error
 * components:
 *   schemas:
 *     BookSearchTitle:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of your book
 *         author:
 *           type: string
 *           description: The book author
 *         year:
 *           type: string
 *           description: The year of the book
 *         status:
 *           type: boolean
 *           description: Whether you have finished reading the book
 *         __v:
 *           type: string
 *           description: The auto-generated control version
 *       example:
 *         _id: 65a19d626ca05e1bc0075c05
 *         title: El principito
 *         author: Juju
 *         year: "2020"
 *         status: true
 *         __v: 0
 */
routerBook.get("/search/:title", [webToken.validateToken, bookValidation.searchBookValidation], bookController.searchBookByTitle);

export { routerBook };
