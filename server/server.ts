import "dotenv/config";
import express, { Express, Request, Response } from "express";
import env from "./config/validateEnv";
import createHttpError from "http-errors";
import morgan from "morgan";
import * as CONSTANTS from "./constants";
import { print } from "./functions/print";
import { Server } from "http";
import { connectDB } from "./config/db";
import { NextFunction } from "connect";
import handleError from "./middleware/handleError";
import userRoutes from "./routes/user.route";

const app: Express = express();
const PORT: number | string = env.PORT || 8080;
const VERSION_STRING = "/api/v1";

// middleware
app.use(express.json());
app.use(morgan("short"));

// Routes
app.get(`/`, (_: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Register Ox Server is UP",
  });
});
app.use(`${VERSION_STRING}/user`, userRoutes);
// Error Handling
app.use((_: Request, __: Response, next: NextFunction) => next(createHttpError(404, "Requested endpoint not found")));
app.use(handleError);

let server: Server = app.listen(PORT, () => {
  if (process.env.NODE_ENV === "development") {
    print(CONSTANTS.SUCCESS, `Server Up on Port ${PORT}`, true);
    print(CONSTANTS.LINK, `Visit http://localhost:${PORT}`);
  } else {
    print(CONSTANTS.SUCCESS, `Production`);
  }
});
// Connect Database
connectDB(server);
