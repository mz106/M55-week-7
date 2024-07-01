const express = require("express");
const { execPath } = require("process");

const app = express();

app.use(express.json());

const fakeData = [
  { id: 1, title: "book1", author: "author1", genre: "genre1" },
  { id: 2, title: "book2", author: "author2", genre: "genre2" },
  { id: 3, title: "book3", author: "author3", genre: "genre3" },
];

// example
app.get("/books", (request, response) => {
  //   console.log(request.path, " :", typeof request.path);
  //   console.log(response);
  response.send("Hello from /books");
});

// getAllBooks
app.get("/books/getAllBooks", (request, response) => {
  //   console.log(request.path);

  const successResponse = {
    message: "success",
    books: fakeData,
  };

  response.send(successResponse);
});

// addBook
app.post("/books/addBook", (request, response) => {
  //   console.log(request.body);

  fakeData.push(request.body);

  const successResponse = {
    message: "success",
    books: fakeData,
  };

  response.send(successResponse);
});

app.put("/books", (request, reponse) => {
  // in here, find a book by title (i.e. an element of fakeArr where the element title is the same as request.body.title)
  // change (update) the author to an new name
});

app.delete("/books", (request, response) => {
  // in here, find a book by title (i.e. an element of fakeArr where the element title is the same as request.body.title)
  // remove (delete) the element from the array
});

app.listen(5001, () => {
  console.log(`Server is listening of port 5001`);
});
