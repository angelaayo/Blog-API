const { addPost } = require("../prisma/postQueries");

async function addNewPost(req, res) {
  const userId = 1;
  const title = "Testing";
  const content = "Hello world";
  const published = true;

  await addPost(userId, title, content, published);
  console.log(`message created`);
}

module.exports = { addNewPost };
