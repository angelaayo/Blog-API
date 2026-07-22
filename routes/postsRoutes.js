const Router = require(`express`);
const postsController = require("../controllers/postsController");
const commentController = require("../controllers/commentsController");
const { verifyToken } = require("../helper.js");
const postsRouter = Router();

postsRouter.post("/", verifyToken, postsController.addNewPost); //create post
// postsRouter.get("/new"); //render post form
postsRouter.get("/:postId", postsController.getPostInfo); ///view post and its comments
postsRouter.get("/:postId/edit", verifyToken, postsController.getPostForEdit); // edit post form
postsRouter.put("/:postId", verifyToken, postsController.updatePost); // update post -not completed
postsRouter.delete("/:postId", verifyToken, postsController.deletePost); //delete post
postsRouter.post(
  "/:postId/comments",
  verifyToken,
  commentController.addComment,
); //add comment
postsRouter.get(
  "/:postId/comments/:commentId/edit",
  verifyToken,
  commentController.getComment,
); // edit comment form
postsRouter.put("/:postId/comments/:commentId", commentController.updateComment); // update comment --not completed
postsRouter.delete(
  "/:postId/comments/:commentId",
  verifyToken,
  commentController.deleteComment,
);

module.exports = postsRouter;
