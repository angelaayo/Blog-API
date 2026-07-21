const Router = require(`express`);
const userRouter = Router();

userRouter.get("/users/:userId/posts"); //view a users posts
userRouter.get("/users/:userId"); //view a users profile


module.exports = userRouter;