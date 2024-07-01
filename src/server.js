const express = require("express");

const app = express();

app.use("/example", express.static("example"));

app.use("/dave", () => console.log("hello dave"));

app.listen(5001, () => {
  console.log(`Server is listening of port 5001`);
});
