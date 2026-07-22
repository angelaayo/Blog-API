const prisma = require("../lib/prisma.js");

async function getAllPosts() {
  return await prisma.post.findMany();
}

async function addPost(userId, title, content, published) {
  return await prisma.post.create({
    data: {
      title,
      userId,
      content,
      published,
    },
  });
}

async function deletePost(id) {
  return await prisma.post.delete({
    where: { id },
  });
}
module.exports = { getAllPosts, addPost, deletePost };
