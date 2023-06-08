import { RequestHandler } from "express";
import createHttpError from "http-errors";
import Product from "../models/Product.model";

export const addNewProduct: RequestHandler = async (req, res, next) => {
  const { storeId } = req.params;
  const { name, price, description, ingredientList, tags, category } = req.body;
  try {
    // Check for required field
    if (!name || !price || !description || !category) {
      throw createHttpError(
        400,
        "We are unable to process the request as you are missing one or more required field(s)"
      );
    }
    const newProduct = await Product.create({
      name,
      price,
      description,
      ingredientList,
      tags,
      category,
      store: storeId,
    });
    res.status(201).json({
      success: true,
      message: `${name} product was added to store successfully`,
      product: newProduct,
    });
  } catch (error) {
    next(error);
  }
};

interface GetAllStoreProductParams {
  storeId: string;
}
export const getAllStoreProduct: RequestHandler<GetAllStoreProductParams, {}, {}, {}> = async (req, res, next) => {
  try {
    const { storeId } = req.params;

    const productList = await Product.find({ store: storeId });

    res.status(200).json({
      success: true,
      message: "List of product was fetched successfully",
      productList,
    });
  } catch (error) {
    next(error);
  }
};
