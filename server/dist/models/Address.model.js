"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AddressSchema = new mongoose_1.Schema({
    street: {
        type: String,
        required: [true, "Address street is a required field"],
        maxLength: [200, "Address street has a character limit of 200"],
    },
    addressLine: {
        type: String,
        maxLength: [200, "Address Line  has a character limit of 200"],
    },
    city: {
        type: String,
        required: [true, "City is a required field"],
    },
    state: {
        type: String,
        required: [true, "State is a required field"],
    },
    country: {
        type: String,
        required: [true, "Country is a required field"],
    },
    postalCode: {
        type: String,
        required: [true, "Postal Code is a required field"],
    },
}, {
    timestamps: true,
});
const Address = (0, mongoose_1.model)("address", AddressSchema);
exports.default = Address;
