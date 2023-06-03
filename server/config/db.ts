import { Server } from "http";
import { ERROR, SUCCESS } from "../constants";
import { print } from "../functions/print";
import env from "./validateEnv";
import mongoose from "mongoose";

export async function connectDB(server: Server) {
  try {
    const { connection } = await mongoose.connect(env.MONGODB_URI);
    print(SUCCESS, `Connection established to ${connection.host}`);
    print(SUCCESS, `Database ${connection.name} connected`);
  } catch (error) {
    print(ERROR, `Server was shut down due to the following error\n${error}`);
    server.close(() => process.exit(1));
  }
}
