const Router = require(`express`);
const postsController = require("../controllers/postsController");
const postsRouter = Router();
const { asyncHandler } = require("../hooks.js");

postsRouter.post("/", postsController.verifyToken, postsController.addNewPost); //create post
// postsRouter.get("/new"); //render post form
postsRouter.get("/:postId", postsController.getPostInfo); ///view post and its comments
postsRouter.get(
  "/:postId/edit",
  postsController.verifyToken,
  postsController.getPostForEdit,
); // edit post form
postsRouter.put(
  "/:postId",
  postsController.verifyToken,
  postsController.updatePost,
); // update post
postsRouter.delete("/:postId", asyncHandler(postsController.deletePost)); //delete post
// postsRouter.post("/:postId/comments"); //add comment
// postsRouter.get("/:postId/comments/:commentId/edit"); // edit comment form
// postsRouter.put("/:postId/comments/:commentId"); // update comment
// postsRouter.delete("/posts/:postId/comments/:commentId");

module.exports = postsRouter;
