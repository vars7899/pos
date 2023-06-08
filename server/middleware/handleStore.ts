import { NextFunction, Response, Request } from "express";

const handleStore = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("first");
  } catch (error) {
    next(error);
  }
};

export default handleStore;
