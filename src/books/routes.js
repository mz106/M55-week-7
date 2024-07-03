const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");

// getAllBooks
bookRouter.get("/books/getAllBooks", async (request, response) => {
  // step1: db interaction

  const books = await Book.find({});

  // step2: create success object
  const successResponse = {
    message: "success",
    books: books,
  };

  // step 3: send response

  response.send(successResponse);
});

module.exports = bookRouter;
