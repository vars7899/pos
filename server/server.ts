import "dotenv/config";
import express, { Express, Request, Response } from "express";
import { print } from "./functions/print";
import { SUCCESS, LINK } from "./constants";
import { Server } from "http";
import { connectDB } from "./config/db";
import env from "./config/validateEnv";

const app: Express = express();
const PORT: number | string = env.PORT || 8080;
const VERSION_STRING = "/api/v" + env.PORT;

// Routes
app.get(`/`, (_: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Register Ox Server is UP",
  });
});

let server: Server = app.listen(PORT, () => {
  if (process.env.NODE_ENV === "development") {
    print(SUCCESS, `Server Up on Port ${PORT}`, true);
    print(LINK, `Visit http://localhost:${PORT}`);
  } else {
    print(SUCCESS, `Production`);
  }
});
// Connect Database
connectDB(server);
