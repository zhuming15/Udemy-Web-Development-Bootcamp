const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body.date);
  const apiKey = "p8TuhNe6W48zN1NpkGebkzgaRATt6Jb39erwC85z";
  const date = req.body.date;
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;
  https.get(url, (response) => {
    response.on("data", (data) => {
      const apod = JSON.parse(data);
      res.write(`<h1>${apod.title}</h1>`);
      res.write(`<img src=${apod.url} alt="apod">`);
      res.send();
    });
  });
});

/*
app.get("/", (req, res) => {
  const url = openWeatherMapURL;
  https.get(url, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      res.write(`<h1>The temperature in ${city} is ${temp} degrees Celcius.</h1>`);
      res.write(`<p>The weather is currently ${weatherDescription}.</p>`);
      res.write(`<img
        src="http://openweathermap.org/img/w/${icon}.png"
        alt="weather icon"
      />`);
      res.send();
    });
  });
});
*/

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
