import colors from "colors";
import { SUCCESS, FAILURE, LINK, REJECT, ERROR } from "../constants";

const selectLabelColor = (indicator: string, outputString: string) => {
  switch (indicator) {
    case SUCCESS:
      return colors.green(outputString);
    case FAILURE:
      return colors.red(outputString);
    case LINK:
      return colors.blue.underline(outputString);
    case REJECT:
      return colors.bgRed.yellow(outputString);
    case ERROR:
      return colors.red(outputString);
  }
};

// Function --> to console message in a better way
export const print = (indicator: string, message: string, moveToNext: boolean = false) => {
  if (typeof indicator != "string" || typeof message != "string" || typeof moveToNext != "boolean") {
    throw new Error("Invalid type passed to custom consoleLog");
  }
  let outputString = indicator + ":\t" + message;

  moveToNext ? console.log("\n") : null;
  console.log(selectLabelColor(indicator, outputString));
};
