const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("<h1>Hello World</h1>");
});

app.get("/contact", (req, res) => {
  res.send("Contact me at: zhuming@gmail.com");
});

app.get("/about", (req, res) => {
  res.send("I am a software engineer");
});

app.get("/hobbies", (req, res) => {
  res.send("<ul><li>Coffee</li><li>Code</li><li>Music</li></ul>");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
