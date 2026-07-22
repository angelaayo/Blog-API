const Router = require(`express`);
const userRouter = Router();

userRouter.get("/:userId/posts"); //view a users posts
userRouter.get("/:userId"); //view a users profile


module.exports = userRouter;