const express = require("express");
const router = express.Router();

const booksController = require("../controllers/book-controller");

router.get("/", booksController.getAllBooks);
router.get("/:id", booksController.getBookById);
router.post("/AddBook", booksController.AddBook);
router.put("/UpdateBook/:id", booksController.UpdateBook);
router.delete("/:id", booksController.DeleteBook);

module.exports = router;
