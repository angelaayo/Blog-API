const commentQuery = require("../prisma/commentQueries");
const { ensureValidComment } = require("../helper");

async function addComment(req, res) {
  const content = "This is such a cool post";
  const userId = 5;
  newComment = await commentQuery.addComment(
    content,
    Number(req.params.postId),
    userId,
  );
  res.json({ newComment });
}

async function getComment(req, res) {
  const comment = await ensureValidComment(req.params.commentId, req.user.id);
  res.json({ comment });
}

async function deleteComment(req, res) {
  await ensureValidComment(req.params.commentId, req.user.id);
  const delComment = await commentQuery.deleteComment(
    Number(req.params.commentId),
  );
  res.json({ delComment });
}

async function updateComment(req, res) {
  await ensureValidComment(req.params.commentId, req.user.id);
  const content = "Away from me";
  const editedComment = await commentQuery.editComment(
    Number(req.params.commentId),
    content,
  );
}

module.exports = { addComment, getComment, deleteComment, updateComment };
