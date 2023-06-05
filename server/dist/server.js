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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const validateEnv_1 = __importDefault(require("./config/validateEnv"));
const http_errors_1 = __importDefault(require("http-errors"));
const morgan_1 = __importDefault(require("morgan"));
const CONSTANTS = __importStar(require("./constants"));
const print_1 = require("./functions/print");
const db_1 = require("./config/db");
const handleError_1 = __importDefault(require("./middleware/handleError"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
const PORT = validateEnv_1.default.PORT || 8080;
const VERSION_STRING = "/api/v1";
// middleware
app.use(express_1.default.json());
app.use((0, morgan_1.default)("short"));
app.use((0, cookie_parser_1.default)());
// Routes
app.get(`/`, (_, res) => {
    res.status(200).json({
        success: true,
        message: "Register Ox Server is UP",
    });
});
app.use(`${VERSION_STRING}/user`, user_route_1.default);
// Error Handling
app.use((_, __, next) => next((0, http_errors_1.default)(404, "Requested endpoint not found")));
app.use(handleError_1.default);
let server = app.listen(PORT, () => {
    if (process.env.NODE_ENV === "development") {
        (0, print_1.print)(CONSTANTS.SUCCESS, `Server Up on Port ${PORT}`, true);
        (0, print_1.print)(CONSTANTS.LINK, `Visit http://localhost:${PORT}`);
    }
    else {
        (0, print_1.print)(CONSTANTS.SUCCESS, `Production`);
    }
});
// Connect Database
(0, db_1.connectDB)(server);
