import createHttpError from "http-errors";
import mongoose from "mongoose";

const validateObjectId = (id: any) => {
  if (!id || !mongoose.isValidObjectId(id)) {
    throw createHttpError(
      400,
      "We are unable to locate the desired response due to an invalid ID. Please try again with a valid ID"
    );
  }
};

export default validateObjectId;
