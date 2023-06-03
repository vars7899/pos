import { RequestHandler } from "express";
import { IRegisterUser } from "../global/types";
import createHttpError from "http-errors";
import Address from "../models/Address.model";
import User from "../models/User.model";
import validateEmail from "../functions/validateEmail";
import generateOtp from "../config/generateOtp";
import env from "../config/validateEnv";
import { sendEmail } from "../config/sendEmail";

export const registerNewUser: RequestHandler<{}, {}, IRegisterUser, {}> = async (req, res, next) => {
  const { firstName, lastName, email, password, dob, phoneNumber, address } = req.body;

  try {
    // ! Check for required fields
    if (!firstName || !lastName || !email || !password) {
      throw createHttpError(400, "Missing one or more required field(s), Please try again");
    }
    const { street, city, state, country, postalCode } = address;
    if (!street || !city || !state || !country || !postalCode) {
      throw createHttpError(400, "Missing one or more required address field(s), please try again");
    }
    if (!validateEmail(email)) {
      throw createHttpError(400, "Invalid email syntax, please try again");
    }

    // ! Check if email is already registered
    const userAlreadyExist = await User.find({ email: email });
    console.log(userAlreadyExist, !userAlreadyExist.length);
    if (userAlreadyExist.length) {
      throw createHttpError(400, "Email already registered, please login instead");
    }

    // ! Generate OTP and create new User
    const otpValue = generateOtp();
    const newLinkedAddress = await Address.create(address);
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password,
      dob,
      phoneNumber,
      address: newLinkedAddress,
      otp: {
        value: otpValue,
        expiresAt: new Date(Date.now() + env.OTP_EXPIRATION_GAP * 60 * 1000),
      },
    });
    // ! Send OTP to the user email
    sendEmail(
      email,
      "Verify your Register Ox account",
      `<div>
        <p>${otpValue}</p>
    </div>`
    );

    res.status(200).json({
      success: true,
      user: newUser,
    });
  } catch (error) {
    next(error);
  }
};
