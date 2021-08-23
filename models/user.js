const bcrypt = require("bcrypt");
const admin = {
  id: Math.floor(Math.random() * 100),
  username: "admin",
  password: bcrypt.hashSync("123456", 10),
};

function User({ id, username, password }) {}
