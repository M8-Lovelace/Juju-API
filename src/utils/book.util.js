import Book from "../models/Book.js";

const bookHelper = {};

bookHelper.validateIfBookExist = async (id) => {
  try {
    const book = await Book.findById(id);
    if (!book) {
      throw new Error();
    }
  } catch (error) {
    throw new Error(`El libro con el id ${id} no existe`);
  }
};

export { bookHelper };