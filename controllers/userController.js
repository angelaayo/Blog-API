const userQueries = require("../prisma/userQueries.js");
async function getUserPosts(req, res) {
  const posts = await userQueries.getUserPosts(Number(req.params.userId));
  res.json({ posts });
}

module.exports = { getUserPosts };
