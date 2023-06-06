import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import Table from "../models/Table.model";
import validateObjectId from "../config/validateObjectId";

interface AddNewTableParams {
  storeId: string;
}
interface AddNewTableRequest {
  tableNumber: number;
  capacity: number;
  location?: string;
}
export const addNewTable: RequestHandler<AddNewTableParams, {}, AddNewTableRequest, {}> = async (req, res, next) => {
  try {
    const { storeId } = req.params;
    if (!storeId || !mongoose.isValidObjectId(storeId)) {
      throw createHttpError(
        400,
        "We are unable to locate the desired store due to an invalid store ID. Please try again with a valid store ID"
      );
    }

    const { tableNumber, capacity, location } = req.body;
    if (!tableNumber || !capacity) {
      throw createHttpError(
        400,
        "Missing one or more required field(s). We are unable to process the request, please tyr again"
      );
    }

    // Check Table number is unique in restaurant
    const tableNumberExist = await Table.find({ store: storeId, tableNumber });
    if (tableNumberExist.length) {
      throw createHttpError(
        400,
        "We are unable to process the request as the table number already exist, please try again with a different table number"
      );
    }

    const newTable = await Table.create({ tableNumber, capacity, location, store: storeId });

    res.status(201).json({
      success: true,
      message: "New table was added successfully",
      table: newTable,
    });
  } catch (error) {
    next(error);
  }
};

interface GetTableDetailsParams {
  tableId: string;
}
export const getTableDetails: RequestHandler<GetTableDetailsParams, {}, {}, {}> = async (req, res, next) => {
  try {
    const { tableId } = req.params;
    validateObjectId(tableId);

    const tableExit = await Table.findById(tableId);
    if (!tableExit) {
      throw createHttpError(400, "We are unable to locate the desired table. Please try again");
    }

    res.status(200).json({
      success: true,
      message: "Table data was fetched successfully",
      table: tableExit,
    });
  } catch (error) {
    next(error);
  }
};

interface UpdateTableDetailsParams {
  tableId: string;
}
interface UpdateTableDetailsRequest {
  tableNumber?: number;
  capacity?: number;
  location?: string;
}
export const updateTableDetails: RequestHandler<UpdateTableDetailsParams, {}, UpdateTableDetailsRequest, {}> = async (
  req,
  res,
  next
) => {
  try {
    const { tableId } = req.params;
    validateObjectId(tableId);

    const { tableNumber, capacity, location } = req.body;
    const tableExit = Table.findByIdAndUpdate(tableId, { tableNumber, capacity, location }, { new: true });
    if (!tableExit) {
      throw createHttpError(400, "We are unable to locate the desired table. Please try again");
    }
    res.status(200).json({
      success: true,
      message: "Table details were updated successfully",
      table: tableExit,
    });
  } catch (error) {
    next(error);
  }
};

interface RemoveTableParams {
  tableId: string;
}
export const removeTable: RequestHandler<RemoveTableParams, {}, {}, {}> = async (req, res, next) => {
  try {
    const { tableId } = req.params;
    validateObjectId(tableId);

    const tableExit = Table.findByIdAndDelete(tableId);
    if (!tableExit) {
      throw createHttpError(400, "We are unable to locate the desired table. Please try again");
    }
    res.status(200).json({
      success: true,
      message: "Table details was deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
