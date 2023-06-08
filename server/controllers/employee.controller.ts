import { RequestHandler } from "express";
import createHttpError from "http-errors";

export const registerEmployee: RequestHandler = (req, res, next) => {
  try {
    const { firstName, lastName, email, phoneNumber, role, address, gender } = req.body;

    if (!firstName || !lastName || !email || !phoneNumber || !role || !address || !gender) {
      throw createHttpError(
        400,
        "Missing one or more required field, We are unable to process the request as it is missing one or more required field"
      );
    }
  } catch (error) {
    next(error);
  }
};

export const loginEmployee: RequestHandler = (req, res, next) => {
  try {
    const { storeAccessCode, userName, password } = req.body;

    if (!storeAccessCode || !userName || !password) {
      throw createHttpError(
        400,
        "Missing one or more required field, We are unable to process the request as it is missing one or more required field"
      );
    }

    // const employeeExist = await
  } catch (error) {
    next(error);
  }
};
