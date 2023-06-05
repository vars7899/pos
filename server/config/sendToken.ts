import { CookieOptions, Response } from "express";

async function sendToken(res: Response, user: any, statusCode: number, message: string) {
  const token = await user.generateToken();
  const cookieOptions: CookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // Expiry in 1 Day
  };
  // ! Delete user fields
  let { password, ...userData } = user._doc;
  res.status(statusCode).cookie("token", token, cookieOptions).json({
    success: true,
    message,
    user: userData,
  });
}

export default sendToken;
