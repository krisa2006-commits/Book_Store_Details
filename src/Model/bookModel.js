const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },

    author: {
      type: String,
      required: [true, "Author is required"],
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
    },

    category: {
      type: String,
      required: [true, "Category is required"],
    },

    stock: {
      type: Number,
      required: [true, "Stock is required"],
    },

    description: {
      type: String,
      required: [true, "Description is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);