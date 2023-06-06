import { NextFunction, Response } from "express";
import createHttpError from "http-errors";
import env from "../config/validateEnv";
import User from "../models/User.model";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const handleAuth = async (req: any, _: Response, next: NextFunction) => {
  try {
    const { token } = req.cookies;
    // Check if cookie exist
    if (!token) {
      throw createHttpError(401, "Unauthorized user, no token available");
    }
    const decode: any = jwt.verify(token, env.JWT_SECRET_KEY);
    // Check if the token is valid or not
    if (!mongoose.isValidObjectId(decode._id)) {
      throw createHttpError(400, "Invalid user id, no such user exist");
    }
    const userExist = await User.findById(decode._id);
    // If user does not exist
    if (!userExist) {
      throw createHttpError(401, "unauthorized user, invalid token");
    }
    req.user = userExist;
    next();
  } catch (error) {
    next(error);
  }
};

export default handleAuth;
