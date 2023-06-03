import { Errback, NextFunction, Request, Response } from "express";
import { isHttpError } from "http-errors";

const handleError = (error: any, _: Request, res: Response, next: NextFunction) => {
  console.error(error);

  let statusCode = 500;
  let errorMessage: string = error.message || "OOPS!!!, Something went wrong";

  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }
  res.status(statusCode).json({
    success: false,
    error: errorMessage,
  });
};

export default handleError;
