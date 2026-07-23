const prisma = require("../lib/prisma.js");

async function addUser(email, username, password) {
  return await prisma.user.create({
    data: {
      email,
      username,
      password,
    },
  });
}

async function getUserPosts(userId) {
  return await prisma.post.findMany({ where: { userId } });
}

module.exports = { addUser, getUserPosts };
