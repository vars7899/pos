const colors = require("colors");
const CONSTANTS = require("../constants");

const selectLabelColor = (indicator, outputString) => {
  switch (indicator) {
    case CONSTANTS.SUCCESS:
      return colors.green(outputString);
    case CONSTANTS.FAILURE:
      return colors.red(outputString);
    case CONSTANTS.LINK:
      return colors.blue.underline(outputString);
    case CONSTANTS.REJECT:
      return colors.bgRed.yellow(outputString);
    case CONSTANTS.ERROR:
      return colors.red(outputString);
  }
};

// Function --> to console message in a better way
const consoleLog = (indicator, message, moveToNext = false) => {
  if (typeof indicator != "string" || typeof message != "string" || typeof moveToNext != "boolean") {
    throw new Error("Invalid type passed to custom consoleLog");
  }
  let spaceCalc = indicator.length > 6 ? "\t" : "\t\t";
  let outputString = indicator + ":" + spaceCalc + message;

  moveToNext ? console.log("\n") : null;
  console.log(selectLabelColor(indicator, outputString));
};

module.exports = consoleLog;
