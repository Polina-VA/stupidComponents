const { registration, authorization, logout } = require("../controllers/authController");

const authRouter = require("express").Router();


authRouter.post("/registration",  registration);
authRouter.post("/authorization", authorization);
authRouter.delete("/logout", logout);


module.exports = authRouter;
