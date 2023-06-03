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
exports.connectDB = void 0;
const constants_1 = require("../constants");
const print_1 = require("../functions/print");
const validateEnv_1 = __importDefault(require("./validateEnv"));
const mongoose_1 = __importDefault(require("mongoose"));
function connectDB(server) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { connection } = yield mongoose_1.default.connect(validateEnv_1.default.MONGODB_URI);
            (0, print_1.print)(constants_1.SUCCESS, `Connection established to ${connection.host}`);
            (0, print_1.print)(constants_1.SUCCESS, `Database ${connection.name} connected`);
        }
        catch (error) {
            (0, print_1.print)(constants_1.ERROR, `Server was shut down due to the following error\n${error}`);
            server.close(() => process.exit(1));
        }
    });
}
exports.connectDB = connectDB;
