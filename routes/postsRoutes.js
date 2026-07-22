const Router = require(`express`);
const { addNewPost } = require("../controllers/postsController");
const postsRouter = Router();

postsRouter.post("/", addNewPost); //create post
// postsRouter.get("/new"); //render post form
// postsRouter.get("/:postId"); ///view post and its comments
// postsRouter.get("/:postId/edit"); // edit post form
// postsRouter.put("/:postId"); // update post
// postsRouter.delete("/:postId"); //delete post
// postsRouter.post("/:postId/comments"); //add comment
// postsRouter.get("/:postId/comments/:commentId/edit"); // edit comment form
// postsRouter.put("/:postId/comments/:commentId"); // update comment
// postsRouter.delete("/posts/:postId/comments/:commentId");

module.exports = postsRouter;

