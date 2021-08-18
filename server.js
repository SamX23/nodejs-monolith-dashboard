const express = require("express");
const app = express();
const expresslayout = require("express-ejs-layouts");

// Define Port
const { PORT = 8080 } = process.env;

// View Engine
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(expresslayout);

// Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const setDefault = (req, res, next) => {
  res.locals.contentName = "Default";
  next();
};

app.get("/", (req, res) => {
  res.render("/layout/default");
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
