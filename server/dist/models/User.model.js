"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
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
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "address",
    },
}, {
    timestamps: true,
});
const User = (0, mongoose_1.model)("user", UserSchema);
exports.default = User;
