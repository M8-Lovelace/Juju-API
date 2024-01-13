import { Router } from "express";
import userValidation from "../validations/user.validation.js";
import userController from "../controller/user.controller.js";
import webToken from "../middlewares/jwt.middleware.js";

const routerUser = Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: The users managing API
 * /api/user:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
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
 *             $ref: '#/components/schemas/UserCreateBody'
 *     responses:
 *       201:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserCreate'
 *       500:
 *         description: Some server error
 * components:
 *   schemas:
 *     UserCreate:
 *       type: object
 *       properties:
 *         data:
 *           type: object
 *           properties:
 *             user:
 *               type: object 
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The auto-generated id of the user
 *                 email:
 *                   type: string
 *                   description: The email of the user
 *                 password:
 *                   type: string
 *                   description: The password of the user
 *                 __v:
 *                   type: string
 *                   description: The auto-generated control version
 *       example:
 *         data:
 *           user:
 *             _id: 65a19d626ca05e1bc0075c05
 *             email: example@gmail.com
 *             password: example123
 *             __v: 0
 *     UserCreateBody:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The email of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *       example:
 *         email: example@gmail.com
 *         password: example123
 */
routerUser.post("/", userValidation.createValidation, userController.create);

/**
 * @swagger
 * tags:
 *   name: User
 *   description: The users managing API
 * /api/user/login:
 *   post:
 *     summary: Login a user
 *     tags: [User]
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
 *             $ref: '#/components/schemas/UserLoginBody'
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserLogin'
 *       500:
 *         description: Some server error
 * components:
 *   schemas:
 *     UserLogin:
 *       type: object
 *       properties:
 *         data:
 *           type: object
 *           properties:
 *             user:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The message of the response
 *                 token:
 *                   type: string
 *                   description: The token of the user
 *       example:
 *         data:
 *           user:
 *             message: User logged
 *             token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTFhMDFhNTFkNjE4NzRhZGMwYjVkNSIsImVtYWlsIjoiZWR3aW5AZ21haWwuY29tIiwiaWF0IjoxNzA1MDkxMTIwfQ.og4eLHlytvRN4_pOZ6d9yonhX0nBgwELumWK3jbBqh4
 *     UserLoginBody:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The email of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *       example:
 *         email: example@gmail.com
 *         password: example123
 */
routerUser.post("/login", userValidation.loginValidation, userController.login);

/**
 * @swagger
 * tags:
 *   name: User
 *   description: The users managing API
 * /api/user:
 *   get:
 *     summary: Get all users
 *     tags: [User]
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
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserGetAll'
 *       500:
 *         description: Some server error
 * components:
 *   schemas:
 *     UserGetAll:
 *       type: object
 *       properties:
 *         data:
 *           type: object
 *           properties:
 *             user:
 *               type: array 
 *               items:
 *                type: object
 *                properties:
 *                  _id:
 *                    type: string
 *                    description: The auto-generated id of the user
 *                  email:
 *                    type: string
 *                    description: The email of the user
 *                  password:
 *                    type: string
 *                    description: The password of the user
 *                  __v:
 *                    type: string
 *                    description: The auto-generated control version
 *       example:
 *         data:
 *           user:
 *             - _id: 65a19d626ca05e1bc0075c05
 *               email: example@gmail.com
 *               password: example123
 *               __v: 0
 */
routerUser.get("/", webToken.validateToken, userController.findAll);

export { routerUser };
