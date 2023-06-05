import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is a required field"],
    },
    description: {
      type: String,
      maxLength: [400, "Product description has a maximum limit of 400 characters"],
    },
    price: {
      type: Number,
      required: true,
    },
    ingredients: [
      {
        type: String,
      },
    ],
    category: {
      type: String,
      required: [true, "Product category is a required field"],
    },
  },
  { timestamps: true }
);

type IProduct = mongoose.InferSchemaType<typeof ProductSchema>;

const Product = mongoose.model<IProduct>("product", ProductSchema);
export default Product;
