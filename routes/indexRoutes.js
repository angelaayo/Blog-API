const Router = require(`express`);
const indexRouter = Router();
const indexController = require("../controllers/indexController.js");
const passport = require("passport");

indexRouter.get("/", indexController.allPosts);
// indexRouter.get("/login")
indexRouter.post(
  "/login",
  passport.authenticate("local", { session: false }),
  indexController.logInPost,
);
// indexRouter.get("/signup")
indexRouter.post("/signup", indexController.addNewUser);
indexRouter.post("/logout", indexController.logOutGet);

module.exports = indexRouter;
