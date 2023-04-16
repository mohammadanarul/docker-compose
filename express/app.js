const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send(`Hello World! ${process.env.SK} wow`);
});

app.get("/about", (req, res) => {
  res.send(`Hello about page! ${process.env.SK} wow`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}-${process.env.KEY}`);
});
