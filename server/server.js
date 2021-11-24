const express = require("express");
const cors = require("cors");
const axios = require("axios");
const path = require("path");
require("dotenv").config();

let app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.get("/api/articles/:modifier", async (req, res) => {
  await axios
    .get(`${process.env.NEWS_BASE_URL}${req.params.modifier}`, {
      params: { ...req.query, apiKey: process.env.NEWS_API_KEY },
    })
    .then(({ data }) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

app.use(function (req, res, next) {
  res.status(404).type("text").send("Not Found");
});

let port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Your app is listening on port " + port);
});
