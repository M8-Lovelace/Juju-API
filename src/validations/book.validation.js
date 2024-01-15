import { check } from 'express-validator';
import { validateField } from "../middlewares/validateField.middleware.js";
import { bookHelper } from "../utils/book.util.js";
const bookValidation = {};

const { validateIfBookExist } = bookHelper;

// Create movie
bookValidation.createValidation = [
  check('title').notEmpty().withMessage('Title is required'),
  check('author').notEmpty().withMessage('Author is required'),
  check('year').notEmpty().withMessage('Year is required'),
  validateField,
];

// Get movie by id
bookValidation.getIdValidation = [
  check("id", "El id es obligatorio ").notEmpty().exists(),
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id) => {
    await validateIfBookExist(id);
  }),
  validateField,
];

// Delete movie by id
bookValidation.deleteValidation = [
  check("id", "El id es obligatorio ").notEmpty().exists(),
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id) => {
    await validateIfBookExist(id);
  }),
  validateField,
];

// Update movie by id
bookValidation.updateValidation = [
  check("id", "El id es obligatorio ").notEmpty().exists(),
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id) => {
    await validateIfBookExist(id);
  }),
  check('title').notEmpty().withMessage('Title is required'),
  check('author').notEmpty().withMessage('Author is required'),
  check('year').notEmpty().withMessage('Year is required'),
  validateField,
];

// Search movie by title
bookValidation.searchBookValidation = [
  check("title", "El titulo es obligatorio ").notEmpty().exists(),
  validateField,
];

bookValidation.updateStatusValidation = [
  check("id", "El id es obligatorio ").notEmpty().exists(),
  check("id", "El id no es valido").isMongoId(),
  check("id").custom(async (id) => {
    await validateIfBookExist(id);
  }),
  check("status", "El status es obligatorio ").notEmpty().exists(),
  validateField,
]

export default bookValidation;
