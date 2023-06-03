import { cleanEnv, num, port, str } from "envalid";

export default cleanEnv(process.env, {
  PORT: port(),
  MONGODB_URI: str(),
  OTP_EXPIRATION_GAP: num(),
  OUTLOOK_EMAIL: str(),
  OUTLOOK_PASS: str(),
});
