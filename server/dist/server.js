"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const print_1 = require("./functions/print");
const constants_1 = require("./constants");
const db_1 = require("./config/db");
const validateEnv_1 = __importDefault(require("./config/validateEnv"));
const app = (0, express_1.default)();
const PORT = validateEnv_1.default.PORT || 8080;
const VERSION_STRING = "/api/v" + validateEnv_1.default.PORT;
// Routes
app.get(`/`, (_, res) => {
    res.status(200).json({
        success: true,
        message: "Register Ox Server is UP",
    });
});
let server = app.listen(PORT, () => {
    if (process.env.NODE_ENV === "development") {
        (0, print_1.print)(constants_1.SUCCESS, `Server Up on Port ${PORT}`, true);
        (0, print_1.print)(constants_1.LINK, `Visit http://localhost:${PORT}`);
    }
    else {
        (0, print_1.print)(constants_1.SUCCESS, `Production`);
    }
});
// Connect Database
(0, db_1.connectDB)(server);
