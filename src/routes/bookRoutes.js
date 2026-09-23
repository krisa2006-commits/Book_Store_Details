const express = require("express");

const {
  addBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook,
} = require("../controller/bookController");

const router = express.Router();

router.post("/", addBook);
router.get("/", getAllBooks);
router.get("/:id", getBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;