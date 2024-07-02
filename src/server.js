const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// getAllBooks
app.get("/books/getAllBooks", (request, response) => {});

// addBook
app.post("/books/addBook", (request, response) => {});

//update a book's author by title
app.put("/books", (request, response) => {});

// delete a book by title
app.delete("/books", (request, response) => {});

app.listen(5001, () => {
  console.log(`Server is listening of port 5001`);
});
