const Router = require(`express`);
const indexRouter = Router();

indexRouter.get("/")
indexRouter.get("/login")
indexRouter.post("/login")
indexRouter.get("/signup")
indexRouter.post("/signup")
indexRouter.post("/logout")

module.exports = indexRouter;