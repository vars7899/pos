import { RequestHandler } from "express";
import { IRegisterUser, LoginUserRequest } from "../global/types";
import createHttpError from "http-errors";
import Address from "../models/Address.model";
import User from "../models/User.model";
import validateEmail from "../functions/validateEmail";
import generateOtp from "../config/generateOtp";
import env from "../config/validateEnv";
import { sendEmail } from "../config/sendEmail";
import sendToken from "../config/sendToken";

// @desc      Register new user
// @route     /user/register
// @access    public
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
    // ! send response
    sendToken(
      res,
      newUser,
      201,
      "User registered successfully, An OTP was sent to the provided email, please verify to continue"
    );
  } catch (error) {
    next(error);
  }
};

// @desc      Login to app
// @route     /user
// @access    public
export const loginUser: RequestHandler<{}, {}, LoginUserRequest, {}> = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // ! check for required fields
    if (!email || !password) {
      throw createHttpError(400, "Missing one or more required fields");
    }

    // ! find the user from email and check password
    const userExist: any = await User.findOne({ email });

    if (!userExist || !(await userExist.matchPassword(password))) {
      throw createHttpError(400, "Invalid Email or Password");
    }

    sendToken(res, userExist, 200, "User logged In successfully");
  } catch (error) {
    next(error);
  }
};


// @desc      GET User login status
// @route     /user/check-login-status
// @access    private
export const checkLoginStatus: RequestHandler = async (req: any, res, next) => {
  try {
    sendToken(res, req.user, 200, "User is logged In");
    
  } catch (error) {
    next(error)
  }
};