import { RequestHandler } from "express";
import createHttpError from "http-errors";
import Address, { IAddress } from "../models/Address.model";
import Store from "../models/store.model";
import mongoose from "mongoose";
import validateObjectId from "../config/validateObjectId";
import Table from "../models/Table.model";

// @desc        Create new store
// @route       /store/create-store
// @access      private
interface CreateNewStoreRequest {
  name: string;
  address: IAddress;
  currency: string;
}
export const createNewStore: RequestHandler<{}, {}, CreateNewStoreRequest, {}> = async (req: any, res, next) => {
  try {
    const { name, address, currency } = req.body;
    // ! Check all the required fields
    if (!name || !currency) {
      throw createHttpError(400, "Missing one or more required field(s)");
    }
    const { street, city, state, country, postalCode } = address;
    if (!street || !city || !state || !country || !postalCode) {
      throw createHttpError(400, "Missing one or more required address field(s), please try again");
    }
    // ! Check if the store name is unique
    const nameAlreadyTaken = await Store.findOne({ owner: req.user._id, name });
    if (nameAlreadyTaken) {
      throw createHttpError(400, "Store name is already taken, please try again with a different name");
    }

    // ! Create the new store
    const associatedAddress = await Address.create(address);

    req.body.address = associatedAddress;
    const newStore = await Store.create({ ...req.body, owner: req.user._id });

    res.status(201).json({
      success: true,
      message: `New Store named ${name} was added to the collection of ${req.user.email}`,
      store: newStore,
    });
  } catch (error) {
    next(error);
  }
};

// @desc        Update store
// @route       /store:storeId
// @access      private
interface UpdateStoreRequest {
  name?: string;
}
interface UpdateStoreParams {
  storeId: string;
}
export const updateStoreInformation: RequestHandler<UpdateStoreParams, {}, UpdateStoreRequest, {}> = async (
  req,
  res,
  next
) => {
  try {
    const { storeId } = req.params;
    // Check if the store ID is a valid object Id
    if (!mongoose.isValidObjectId(storeId)) {
      throw createHttpError(
        400,
        "We are unable to locate the desired store due to an invalid store ID. Please try again with a valid store ID"
      );
    }
    const storeExist = await Store.findById(storeId);
    if (!storeExist) {
      throw createHttpError(
        400,
        "We are unable to locate the desired store due to an invalid store ID. Please try again with a valid store ID"
      );
    }
    storeExist.name = req.body.name ? req.body.name : storeExist.name;
    await storeExist.save();

    res.status(200).json({
      success: true,
      message: `Store details was changed successfully`,
      store: storeExist,
    });
  } catch (error) {
    next(error);
  }
};

// @desc        Delete the store
// @route       /store:storeId
// @access      private
interface RemoveStoreParams {
  storeId: string;
}
export const removeStore: RequestHandler<RemoveStoreParams, {}, {}, {}> = async (req, res, next) => {
  try {
    const { storeId } = req.params;
    // Check if the store ID is a valid object Id
    if (!storeId || !mongoose.isValidObjectId(storeId)) {
      throw createHttpError(
        400,
        "We are unable to locate the desired store due to an invalid store ID. Please try again with a valid store ID"
      );
    }
    const storeExist: any = await Store.findById(storeId);
    if (!storeExist) {
      throw createHttpError(
        400,
        "We are unable to locate the desired store due to an invalid store ID. Please try again with a valid store ID"
      );
    }
    // Delete everything related and linked to the store
    await Store.findByIdAndDelete(storeId);
    await Address.findByIdAndDelete(storeExist.address._id);

    res.status(200).json({
      success: true,
      message: "Store was successfully removed from the collection",
    });
  } catch (error) {
    next(error);
  }
};

// @desc        GET all the information about the store
// @route       /store:storeId
// @access      private
interface GetStoreDetailsParams {
  storeId: string;
}
export const getStoreDetails: RequestHandler<GetStoreDetailsParams, {}, {}, {}> = async (req, res, next) => {
  try {
    const { storeId } = req.params;
    // Check if the store ID is a valid object Id
    if (!storeId || !mongoose.isValidObjectId(storeId)) {
      throw createHttpError(
        400,
        "We are unable to locate the desired store due to an invalid store ID. Please try again with a valid store ID"
      );
    }
    const storeExist = await Store.findById(storeId);
    if (!storeExist) {
      throw createHttpError(
        400,
        "We are unable to locate the desired store due to an invalid store ID. Please try again with a valid store ID"
      );
    }
    res.status(200).json({
      success: true,
      message: "Store data was fetched successfully",
      store: storeExist,
    });
  } catch (error) {
    next(error);
  }
};

// @desc        GET all the store associated to the user
// @route       /api/store
// @access      private
export const getAllUserStore: RequestHandler<{}, {}, {}, {}> = async (req: any, res, next) => {
  try {
    const storeList = await Store.find({ owner: req.user._id });
    res.status(200).json({
      success: true,
      message: "List of store was fetched successfully",
      storeList,
    });
  } catch (error) {
    next(error);
  }
};

interface GetAllStoreTableParams {
  storeId: string;
}
export const getAllStoreTable: RequestHandler<GetAllStoreTableParams, {}, {}, {}> = async (req: any, res, next) => {
  try {
    const { storeId } = req.params;
    validateObjectId(storeId);

    const tableList = await Table.find({ store: storeId });
    res.status(200).json({
      success: true,
      message: "List of store tables was fetched successfully",
      tableList,
    });
  } catch (error) {
    next(error);
  }
};
