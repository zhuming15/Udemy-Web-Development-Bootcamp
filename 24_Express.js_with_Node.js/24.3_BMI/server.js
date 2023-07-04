const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", (req, res) => {
  res.send(res.body);
  console.log(res.body);
  // var weight = parseFloat(res.body.weight);
  // var height = parseFloat(res.body.height);
  // var bmiResult = weight / (height * height);
  // res.send("The BMI result is " + bmiResult);
});

app.listen(3000, () => {
  console.log("Server listen to port 3000");
});
