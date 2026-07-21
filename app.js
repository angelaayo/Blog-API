const path = require("node:path");
const express = require("express");
const prisma = require("./lib/prisma.js");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const jwt = require("jsonwebtoken");
const { verify } = require("node:crypto");
require("dotenv/config");

const PORT = process.env.PORT || 3000;
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log("App Listening on port " + PORT);
});
