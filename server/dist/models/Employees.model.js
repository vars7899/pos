"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const roleEnum = ["manager", "kitchen", "bar", "front"];
const EmployeeSchema = new mongoose_1.Schema({
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
    contactInformation: {
        email: {
            type: String,
            required: [true, "Employee email is a required field"],
        },
        phoneNumber: {
            countryCode: { type: Number, required: true, minLength: 1, maxLength: 10 },
            number: { type: Number, required: true, minLength: 1, maxLength: 10 },
        },
    },
    role: {
        type: String,
        enum: roleEnum,
    },
    passCode: {
        type: Number,
        required: [true, "Pass Code is a required field"],
        minLength: [6, "Pass Code has minimum character limit of 6"],
        maxLength: [6, "Pass Code has maximum character limit of 6"],
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true,
    },
}, { timestamps: true });
const Employee = (0, mongoose_1.model)("employee", EmployeeSchema);
exports.default = Employee;
