"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RestaurantSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Restaurant name is required field"],
        maxLength: [200, "Restaurant name has a maximum character limit of 200"],
        minLength: [3, "Restaurant name has a minimum character limit of 3"],
    },
    address: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "address",
    },
    phoneNumber: {
        countryCode: { type: Number, required: true, minLength: 1, maxLength: 10 },
        number: { type: Number, required: true, minLength: 1, maxLength: 10 },
    },
    email: {
        type: String,
        required: [true, "Restaurant email is a required field"],
        unique: [true, "Restaurant email already exist"],
        trim: [true],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Restaurant email provided is invalid",
        ],
        maxLength: [100, "Restaurant email has maximum character limit of 100"],
    },
}, { timestamps: true });
const Restaurant = (0, mongoose_1.model)("restaurant", RestaurantSchema);
exports.default = Restaurant;
