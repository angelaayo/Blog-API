const jwt = require("jsonwebtoken");
const { verify } = require("node:crypto");
const { addPost, postInfo } = require("../prisma/postQueries");
const helper = require("../hooks.js")
require("dotenv/config");

function verifyToken(req, res, next) {
  const beaderHeader = req.headers["authorization"];
  if (typeof beaderHeader == "undefined") {
    return res.sendStatus(403);
  }

  const token = beaderHeader.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (err, authData) => {
    if (err) return res.sendStatus(403);
    req.user = authData;
    next();
  });
}

async function addNewPost(req, res) {
  const userId = 1;
  const title = "Testing";
  const content = "Hello world";
  const published = true;

  await addPost(userId, title, content, published);
  console.log(`message created`);
}

async function getPostInfo(req, res) {
  try {
    const post = await prisma.post.findUnique({
      where: { id: Number(req.params.postId) },
      include: { comments: true },
    });
    res.json(post);
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
}

async function getPostForEdit(req, res) {
  try {
    const post = await helper.ensureValidUser(req.params.postId, req.user.id);
    res.json(post);
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
}

async function updatePost(req, res) {
  // need req.body info then prisma the info
}

async function deletePost(req, res) {
  try {
    await helper.ensureValidUser(req.params.postId, req.user.id);
    const delPost = await prisma.post.delete({
      where: { id: Number(req.params.postId) },
    });
    res.json(delPost);
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
}

module.exports = {
  verifyToken,
  addNewPost,
  getPostInfo,
  getPostForEdit,
  updatePost,
  deletePost,
};
