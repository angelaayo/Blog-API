const prisma = require("../lib/prisma.js");

async function getAllPosts() {
  posts = await prisma.post.findMany();
  return posts;
}

async function addPost(userId, title, content, published) {
  await prisma.post.create({
    data: {
      title,
      userId,
      content,
      published,
    },
  });
}

module.exports = { getAllPosts, addPost };
