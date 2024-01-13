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
 *     parameters: 
 *       - name: "Authorization"
 *         in: "header"
 *         description: "JWT Token"
 *         required: true
 *         type: "string"
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
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
 *       properties:
 *         data:
 *           type: object
 *           properties:
 *             book:
 *               $ref: '#/components/schemas/BookCreateBody'
 *       example:
 *         data:
 *           book:
 *             _id: 65a19d626ca05e1bc0075c05
 *             title: El principito
 *             author: Juju
 *             year: "2020"
 *             status: true
 *             __v: 0
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
 *     summary: Get a book by id
 *     tags: [Book]
 *     parameters: 
 *       - name: "Authorization"
 *         in: "header"
 *         description: "JWT Token"
 *         required: true
 *         type: "string"
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: The book was found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BookById'
 *       500:
 *         description: Some server error
 * components:
 *   schemas:
 *     BookById:
 *       type: object
 *       properties:
 *         data:
 *           type: object
 *           properties:
 *             book:
 *               $ref: '#/components/schemas/BookByIdBody'
 *       example:
 *         data:
 *           book:
 *             _id: 65a19d626ca05e1bc0075c05
 *             title: El principito
 *             author: Juju
 *             year: "2020"
 *             status: true
 *             __v: 0
 *     BookByIdBody:
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
routerBook.get("/:id", [webToken.validateToken, bookValidation.getIdValidation], bookController.getBookById);

/**
 * @swagger
 * tags:
 *   name: Book
 *   description: The books managing API
 * /api/book:
 *   get:
 *     summary: Get all books
 *     tags: [Book]
 *     parameters: 
 *       - name: "Authorization"
 *         in: "header"
 *         description: "JWT Token"
 *         required: true
 *         type: "string"
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: The books were found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BookAll'
 *       500:
 *         description: Some server error
 * components:
 *   schemas:
 *     BookAll:
 *       type: object
 *       properties:
 *         data:
 *           type: object
 *           properties:
 *             book:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/BookAllBody'
 *       example:
 *         data:
 *           book:
 *             - _id: 65a19d626ca05e1bc0075c05
 *               title: El principito
 *               author: Juju
 *               year: "2020"
 *               status: true
 *               __v: 0
 *     BookAllBody:
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
 *     parameters: 
 *       - name: "Authorization"
 *         in: "header"
 *         description: "JWT Token"
 *         required: true
 *         type: "string"
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: The book was deleted.
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
 *         data:
 *           type: object
 *           properties:
 *             book:
 *               $ref: '#/components/schemas/BookDeleteBody'
 *       example:
 *         data:
 *           book:
 *             _id: 65a19d626ca05e1bc0075c05
 *             title: El principito
 *             author: Juju
 *             year: "2020"
 *             status: true
 *             __v: 0
 *     BookDeleteBody:
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
 *     parameters: 
 *       - name: "Authorization"
 *         in: "header"
 *         description: "JWT Token"
 *         required: true
 *         type: "string"
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BookUpdateBody'
 *     responses:
 *       201:
 *         description: The book was updated.
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
 *       properties:
 *         data:
 *           type: object
 *           properties:
 *             book:
 *               $ref: '#/components/schemas/BookUpdateBody'
 *       example:
 *         data:
 *           book:
 *             _id: 65a19d626ca05e1bc0075c05
 *             title: El principito
 *             author: Juju
 *             year: "2020"
 *             status: true
 *             __v: 0
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
 * /api/book/search/{title}:
 *   get:
 *     summary: Search a book by title
 *     tags: [Book]
 *     parameters: 
 *       - name: "Authorization"
 *         in: "header"
 *         description: "JWT Token"
 *         required: true
 *         type: "string"
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: The book was found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BookByTitle'
 *       500:
 *         description: Some server error
 * components:
 *   schemas:
 *     BookByTitle:
 *       type: object
 *       properties:
 *         data:
 *           type: object
 *           properties:
 *             book:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/BookByTitleBody'
 *       example:
 *         data:
 *           book:
 *             - _id: 65a19d626ca05e1bc0075c05
 *               title: El principito
 *               author: Juju
 *               year: "2020"
 *               status: true
 *               __v: 0
 *     BookByTitleBody:
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
routerBook.get("/search/:title", [webToken.validateToken, bookValidation.searchBookValidation], bookController.searchBookByTitle);

export { routerBook };
