"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envalid_1 = require("envalid");
exports.default = (0, envalid_1.cleanEnv)(process.env, {
    PORT: (0, envalid_1.port)(),
    MONGODB_URI: (0, envalid_1.str)(),
    OTP_EXPIRATION_GAP: (0, envalid_1.num)(),
    OUTLOOK_EMAIL: (0, envalid_1.str)(),
    OUTLOOK_PASS: (0, envalid_1.str)(),
    JWT_SECRET_KEY: (0, envalid_1.str)(),
});
