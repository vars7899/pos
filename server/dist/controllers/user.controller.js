"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerNewUser = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const Address_model_1 = __importDefault(require("../models/Address.model"));
const User_model_1 = __importDefault(require("../models/User.model"));
const validateEmail_1 = __importDefault(require("../functions/validateEmail"));
const generateOtp_1 = __importDefault(require("../config/generateOtp"));
const validateEnv_1 = __importDefault(require("../config/validateEnv"));
const sendEmail_1 = require("../config/sendEmail");
const registerNewUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, password, dob, phoneNumber, address } = req.body;
    try {
        // ! Check for required fields
        if (!firstName || !lastName || !email || !password) {
            throw (0, http_errors_1.default)(400, "Missing one or more required field(s), Please try again");
        }
        const { street, city, state, country, postalCode } = address;
        if (!street || !city || !state || !country || !postalCode) {
            throw (0, http_errors_1.default)(400, "Missing one or more required address field(s), please try again");
        }
        if (!(0, validateEmail_1.default)(email)) {
            throw (0, http_errors_1.default)(400, "Invalid email syntax, please try again");
        }
        // ! Check if email is already registered
        const userAlreadyExist = yield User_model_1.default.find({ email: email });
        console.log(userAlreadyExist, !userAlreadyExist.length);
        if (userAlreadyExist.length) {
            throw (0, http_errors_1.default)(400, "Email already registered, please login instead");
        }
        // ! Generate OTP and create new User
        const otpValue = (0, generateOtp_1.default)();
        const newLinkedAddress = yield Address_model_1.default.create(address);
        const newUser = yield User_model_1.default.create({
            firstName,
            lastName,
            email,
            password,
            dob,
            phoneNumber,
            address: newLinkedAddress,
            otp: {
                value: otpValue,
                expiresAt: new Date(Date.now() + validateEnv_1.default.OTP_EXPIRATION_GAP * 60 * 1000),
            },
        });
        // ! Send OTP to the user email
        (0, sendEmail_1.sendEmail)(email, "Verify your Register Ox account", `<div>
        <p>${otpValue}</p>
    </div>`);
        res.status(200).json({
            success: true,
            user: newUser,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.registerNewUser = registerNewUser;
