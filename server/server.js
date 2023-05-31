const express = require("express");
const consoleLog = require("./functions/consoleLog.js");
const CONSTANTS = require("./constants");

require("colors");
require("dotenv").config();

const app = express();
const PORT = 8080 | process.env.PORT;

app.listen(PORT, () => {
  if (process.env.NODE_ENV === "development") {
    // console.log(`Link:\t\tVisit http://localhost:${PORT}`.blue.underline);
    consoleLog(CONSTANTS.SUCCESS, `Server Up on Port ${PORT}`, true);
    consoleLog(CONSTANTS.LINK, `Visit http://localhost:${PORT}`);
  }
});
