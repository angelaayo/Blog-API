
const postQuery = require("../prisma/postQueries.js");
const { ensureValidPost } = require("../helper");
const prisma = require("../lib/prisma.js");


async function addNewPost(req, res) {
  const userId = 1;
  const title = "Testing";
  const content = "Hello world";
  const published = true;

  const newPost = await postQuery.addPost(userId, title, content, published);
  res.json({ newPost });
}

async function getPostInfo(req, res) {
  const post = await prisma.post.findUnique({
    where: { id: Number(req.params.postId) },
    include: { comments: true },
  });
  res.json(post);
}

async function getPostForEdit(req, res) {
  const post = await ensureValidPost(req.params.postId, req.user.id);
  res.json(post);
}

async function updatePost(req, res) {
  // need req.body info then prisma the info
}

async function deletePost(req, res) {
  await ensureValidPost(req.params.postId, req.user.id);
  const delPost = await postQuery.deletePost(Number(req.params.postId));
  res.json(delPost);
}

module.exports = {
  addNewPost,
  getPostInfo,
  getPostForEdit,
  updatePost,
  deletePost,
};
