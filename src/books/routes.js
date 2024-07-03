const { Router } = require("express");
const bookRouter = Router();

const { getAllBooks } = require("./controllers");

// getAllBooks
bookRouter.get("/books/getAllBooks", getAllBooks);

module.exports = bookRouter;
