require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const Book = require("./books/model");

const connection = require("./db/connection");

const app = express();

app.use(express.json());

connection();

// getAllBooks
app.get("/books/getAllBooks", async (request, response) => {
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

// addBook
app.post("/books/addBook", async (request, response) => {
  const book = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });

  const successResponse = {
    message: "success",
    book: book,
  };

  response.send(successResponse);
});

// update a book's author by title
// update by title
//  you'll need a filter (title) and a new author value (newAuthor)
app.put("/books", (request, response) => {});

// delete a book by title
app.delete("/books", (request, response) => {});

app.listen(5001, () => {
  console.log(`Server is listening of port 5001`);
});
