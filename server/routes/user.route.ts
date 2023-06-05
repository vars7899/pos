import { Router as ExpressRouter } from "express";
import * as UserControllers from "../controllers/user.controller";
const Router = ExpressRouter();

Router.route("/").post(UserControllers.loginUser);
Router.route("/register").post(UserControllers.registerNewUser);

export default Router;
