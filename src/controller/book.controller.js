import Book from "../models/Book.js";

const bookController = {};

bookController.create = async (request, response) => {
  const { title, author, year } = request.body;
  try {
    const book = new Book({
      title: title.trim().toUpperCase(),
      author: author.trim().toUpperCase(),
      year
    });
    const bookSaved = await book.save();
    response.status(201).json(bookSaved);
  } catch (error) {
    response.status(500).json({ message: error });
  }
};

bookController.getBookById = async (request, response) => {
  const { id } = request.params;
  try {
    const book = await Book.findById(id);
    response.status(200).json(book);
  } catch (error) {
    response.status(500).json({ message: error });
  }
};

bookController.getAll = async (request, response) => {
  try {
    const books = await Book.find();
    response.status(200).json(books);
  } catch (error) {
    response.status(500).json({ message: error });
  }
};

bookController.delete = async (request, response) => {
  const { id } = request.params;
  try {
    const book = await Book.findById(id);
    await Book.findByIdAndDelete(id);
    response.status(200).json({ message: "Book deleted", book });
  } catch (error) {
    response.status(500).json({ message: error });
  }
};

bookController.update = async (request, response) => {
  const { id } = request.params;
  const { title, author, year } = request.body;
  try {
    await Book.findByIdAndUpdate(id, {
      title: title.trim().toUpperCase(),
      author: author.trim().toUpperCase(),
      year
    });
    const book = await Book.findById(id);
    response.status(200).json(book);
  } catch (error) {
    response.status(500).json({ message: error });
  }
};

bookController.searchBookByTitle = async (request, response) => {
  const { title } = request.params;
  try {
    const books = await Book.find({ title: { $regex: title.toUpperCase() } });
    response.status(200).json(books);
  } catch (error) {
    response.status(500).json({ message: error });
  }
};

export default bookController;
