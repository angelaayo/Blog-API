const jwt = require("jsonwebtoken");
require("dotenv/config");
const bcrypt = require("bcrypt");
const { getAllPosts } = require("../prisma/postQueries");
const { addUser } = require("../prisma/userQueries");

async function allPosts(req, res) {
  const posts = await getAllPosts();
  res.json(posts);
}

async function addNewUser(req, res) {
  const email = "angela1234@gmail.com";
  const username = "angela1234";
  const password = "12345@";
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await addUser(email, username, hashedPassword);
  res.json({ newUser });
}

async function logInPost(req, res) {
  if (req.user) {
    const user = {
      id: req.user.id,
      username: req.user.username,
      email: req.user.email,
    };

    jwt.sign(
      user,
      process.env.SECRET_KEY,
      { expiresIn: "7 days" },
      (err, token) => {
        if (err) {
          return res.status(500).json({ message: "Error signing token" });
        }
        res.json({ token });
      },
    );
  }
}

async function logOutGet(req, res, next) {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
}

module.exports = { allPosts, addNewUser, logInPost, logOutGet };
