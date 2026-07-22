const jwt = require("jsonwebtoken");
require("dotenv/config");

const { getAllPosts } = require("../prisma/postQueries");
const { addUser } = require("../prisma/userQueries");

async function allPosts(req, res) {
  const posts = await getAllPosts();
  res.json(posts);
}

async function addNewUser(req, res) {
  const email = "angela@gmail.com";
  const username = "angela";
  const password = "12345@";
  await addUser(email, username, password);
}

async function logInPost(req, res) {
  // const user = {
  //   id: req.user.id,
  //   username: req.user.username,
  // };

  const user = {
    id: 2,
    username: "Angela",
    email: "angela@gmail.com",
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

async function logOutGet(req, res, next) {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
}

module.exports = { allPosts, addNewUser, logInPost, logOutGet };
