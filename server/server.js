const express = require("express");
const cors = require("cors");
const io = require("socket.io")();
const consoleLog = require("./functions/consoleLog.js");
const CONSTANTS = require("./constants");

require("colors");
require("dotenv").config();

const app = express();
const PORT = 8080 | process.env.PORT;
const VERSION_STRING = "/api/v" + process.env.PORT;

// Routes

let server = app.listen(PORT, () => {
  if (process.env.NODE_ENV === "development") {
    consoleLog(CONSTANTS.SUCCESS, `Server Up on Port ${PORT}`, true);
    consoleLog(CONSTANTS.LINK, `Visit http://localhost:${PORT}`);
  } else {
    consoleLog();
  }
});
