"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.print = void 0;
const colors_1 = __importDefault(require("colors"));
const constants_1 = require("../constants");
const selectLabelColor = (indicator, outputString) => {
    switch (indicator) {
        case constants_1.SUCCESS:
            return colors_1.default.green(outputString);
        case constants_1.FAILURE:
            return colors_1.default.red(outputString);
        case constants_1.LINK:
            return colors_1.default.blue.underline(outputString);
        case constants_1.REJECT:
            return colors_1.default.bgRed.yellow(outputString);
        case constants_1.ERROR:
            return colors_1.default.red(outputString);
    }
};
// Function --> to console message in a better way
const print = (indicator, message, moveToNext = false) => {
    if (typeof indicator != "string" || typeof message != "string" || typeof moveToNext != "boolean") {
        throw new Error("Invalid type passed to custom consoleLog");
    }
    let outputString = indicator + ":\t" + message;
    moveToNext ? console.log("\n") : null;
    console.log(selectLabelColor(indicator, outputString));
};
exports.print = print;
