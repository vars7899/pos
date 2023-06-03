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
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const SALT_ROUNDS = 10;
const UserSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: [true, "First name is a required field"],
        maxLength: [50, "First name has maximum character limit of 50"],
        minLength: [3, "First name has minimum character limit of 3"],
    },
    lastName: {
        type: String,
        required: [true, "Last name is a required field"],
        maxLength: [50, "Last name has maximum character limit of 50"],
        minLength: [3, "Last name has minimum character limit of 3"],
    },
    dob: {
        type: Date,
    },
    email: {
        type: String,
        required: [true, "Email is a required field"],
        unique: [true, "Email already exist"],
        trim: [true],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "email provided is invalid",
        ],
        maxLength: [100, "Email has maximum character limit of 100"],
    },
    password: {
        type: String,
        required: [true, "Password is a required field"],
    },
    otp: {
        value: String,
        expiresAt: Date,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isLocked: {
        type: Boolean,
        default: false,
    },
    address: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "address",
    },
    restaurant: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "restaurant",
        },
    ],
}, {
    timestamps: true,
});
// Pre functions
UserSchema.pre("save", function hashPassword(next) {
    return __awaiter(this, void 0, void 0, function* () {
        let password = this.password;
        if (!this.isModified("password")) {
            next();
        }
        this.password = yield bcrypt_1.default.hash(password, SALT_ROUNDS);
        next();
    });
});
const User = (0, mongoose_1.model)("user", UserSchema);
exports.default = User;
