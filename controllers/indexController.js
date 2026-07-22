// remember to wrap the functions in class

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

module.exports = { allPosts, addNewUser };
