const prisma = require("../lib/prisma.js");

async function addComment(content, postId, userId) {
  return await prisma.comment.create({
    data: {
      content,
      postId,
      userId,
    },
  });
}

// async function getComment(id) {
//   return prisma.comment.findUnique({ where: { id } });
// }

async function deleteComment(id) {
  return prisma.comment.delete({ where: { id } });
}

async function editComment(id, content) {
  return prisma.comment.update({
    where: { id },
    data: {
      content,
    },
  });
}
module.exports = { addComment, deleteComment, editComment };
