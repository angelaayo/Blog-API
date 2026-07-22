const prisma = require("../lib/prisma.js");

async function addUser(email, username, password) {
  const user = await prisma.user.create({
    data: {
      email,
      username,
      password,
    },
  });
  return user;
}

module.exports = { addUser };
