const Router = require(`express`);
const indexRouter = Router();
const indexController = require("../controllers/indexController.js");

indexRouter.get("/", indexController.allPosts);
// indexRouter.get("/login")
// indexRouter.post("/login")
// indexRouter.get("/signup")
indexRouter.post("/signup", indexController.addNewUser);
// indexRouter.post("/logout")

module.exports = indexRouter;
