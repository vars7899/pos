import nodemailer from "nodemailer";
import env from "./validateEnv";
import { print } from "../functions/print";
import * as CONSTANTS from "../constants";

export async function sendEmail(givenReceiver: string, givenSubject: string, givenContent: string) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: env.OUTLOOK_EMAIL,
        pass: env.OUTLOOK_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: "RegisterOx <registerox@outlook.com>",
      to: givenReceiver,
      subject: givenSubject,
      html: givenContent,
    });
    print(CONSTANTS.SUCCESS, `Email sent to ${givenReceiver}, ${info.messageId}`);
  } catch (error) {
    print(CONSTANTS.ERROR, JSON.stringify(error));
  }
}
