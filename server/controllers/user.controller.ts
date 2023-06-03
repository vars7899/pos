import { Request, Response, RequestHandler, NextFunction } from "express";
import { IRegisterUser } from "../global/types";
import User from "../models/User.model";

export const registerNewUser: RequestHandler<{}, {}, IRegisterUser, {}> = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    if (!firstName || !lastName || !email || !password) {
      throw new Error();
    }
    //! Check if email is already registered
    const userAlreadyExist = await User.find({ email: email }).exec();
    if (userAlreadyExist) {
      throw new Error();
    }
  } catch (error) {
    console.error(error);
  }
};
