const Book = require("../Model/bookModel");

exports.addBook = async (req, res) => {
  try {
    const { title, author, price, category, stock, description } = req.body;

    if (
      !title ||
      !author ||
      price === undefined ||
      !category ||
      stock === undefined ||
      !description
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBook = await Book.create({
      title,
      author,
      price,
      category,
      stock,
      description,
    });

    return res
      .status(201)
      .json({ message: "Book added successfully", newBook });
  } catch (error) {
    console.error("Error: ", error);
    return res.status(500).json({ message: "Error while adding book" });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();

    return res
      .status(200)
      .json({ message: "Books fetched successfully", books });
  } catch (error) {
    console.error("Error: ", error);
    return res.status(500).json({ message: "Error while fetching books" });
  }
};

exports.getBook = async (req, res) => {
  try {
    const id = req.params.id;

    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res.status(200).json({ message: "Book fetched successfully", book });
  } catch (error) {
    console.error("Error: ", error);

    return res.status(500).json({ message: "Book load failed" });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const id = req.params.id;

    const { title, author, price, category, stock, description } = req.body;

    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    book.title = title;
    book.author = author;
    book.price = price;
    book.category = category;
    book.stock = stock;
    book.description = description;

    await book.save();

    return res.status(200).json({ message: "Book updated successfully", book });
  } catch (error) {
    console.error("Error: ", error);

    return res.status(500).json({ message: "Book update failed" });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const id = req.params.id;

    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    await Book.findByIdAndDelete(id);

    return res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error: ", error);
    return res.status(500).json({ message: "Book delete failed" });
  }
};
