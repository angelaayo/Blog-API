const Router = require(`express`);
const postsRouter = Router();

postsRouter.get("/posts/new"); //render post form
postsRouter.post("/posts"); //create post
postsRouter.get("/posts/:postId"); ///view post and its comments
postsRouter.get("/posts/:postId/edit"); // edit post form
postsRouter.put("/posts/:postId"); // update post
postsRouter.delete("/posts/:postId"); //delete post
postsRouter.post("/posts/:postId/comments"); //add comment
postsRouter.get("/posts/:postId/comments/:commentId/edit"); // edit comment form
postsRouter.put("/posts/:postId/comments/:commentId"); // update comment
postsRouter.delete("/posts/:postId/comments/:commentId");

module.exports = postsRouter;

