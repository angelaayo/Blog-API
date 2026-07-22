function ensureLoggedIn(req, res) {
  if (!req.user) {
    //show log in page
  }
}

async function ensureValidUser(postId, userId) {
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

function asyncHandler(fn) {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
}

module.exports = { ensureLoggedIn, ensureValidUser, asyncHandler };
