import { Router as ExpressRouter } from "express";
import * as UserControllers from "../controllers/user.controller";
import handleAuth from "../middleware/handleAuth";
const Router = ExpressRouter();

Router.route("/").post(UserControllers.loginUser);
Router.route("/register").post(UserControllers.registerNewUser);
Router.route("/check-login-status").get(handleAuth, UserControllers.checkLoginStatus);

export default Router;
