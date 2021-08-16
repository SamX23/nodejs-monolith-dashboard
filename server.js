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

app.listen(PORT, () => {
  console.log(`Listening on https://localhost:${PORT}`);
});
