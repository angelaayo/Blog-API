const path = require("node:path");
const express = require("express");
const prisma = require("./lib/prisma.js");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const jwt = require("jsonwebtoken");
const { verify } = require("node:crypto");
require("dotenv/config");

const indexRouter = require("./routes/indexRoutes.js");
const userRouter = require("./routes/userRoutes.js");
const postsRouter = require("./routes/postsRoutes.js");

const { localStrat, desUser } = require("./authenticate.js");

const PORT = process.env.PORT || 3000;
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(passport.initialize());
// app.use((req, res, next) => {
//   res.locals.currentUser = req.user;
//   next();
// });

app.use("/", indexRouter);
app.use("/posts", postsRouter);
app.use("/users", userRouter);

passport.use(new LocalStrategy({ usernameField: "email" }, localStrat));
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(desUser);

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log("App Listening on port " + PORT);
});
