const Router = require(`express`);
const userRouter = Router();
const userController = require("../controllers/userController.js");

// userRouter.get("/:userId/posts"); //view a users posts
userRouter.get("/:userId", userController.getUserPosts); //view a users profile + their posts

module.exports = userRouter;
