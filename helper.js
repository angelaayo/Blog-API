const jwt = require("jsonwebtoken");
const { verify } = require("node:crypto");
require("dotenv/config");
function ensureLoggedIn(req, res) {
  if (!req.user) {
    //show log in page
  }
}

async function ensureValidPost(postId, userId) {
  const post = await prisma.post.findUnique({
    where: { id: Number(postId) },
  });
  if (!post) {
    const err = new Error("Post not found");
    err.status = 404;
    throw err;
  }
  if (post.userId !== userId) {
    const err = new Error("Not your post");
    err.status = 403;
    throw err;
  }
  return post;
}

async function ensureValidComment(commentId, userId) {
  const comment = await prisma.comment.findUnique({
    where: { id: Number(commentId) },
  });
  if (!comment) {
    const err = new Error("Comment not found");
    err.status = 404;
    throw err;
  }
  if (comment.userId !== userId) {
    const err = new Error("Not your comment");
    err.status = 403;
    throw err;
  }
  return comment;
}

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


module.exports = { ensureLoggedIn, ensureValidPost, ensureValidComment, verifyToken};
