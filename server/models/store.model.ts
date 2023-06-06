import mongoose from "mongoose";

const StoreSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Store name is required field"],
      maxLength: [200, "Store name has a maximum character limit of 200"],
      minLength: [3, "Store name has a minimum character limit of 3"],
      unique: [true, "Store name has to be unique"],
    },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "address",
      required: [true, "Store Address is a required field"],
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: [true, "Store Owner is a required field"],
    },
    // ! All product list
    productList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
    ],
  },
  { timestamps: true }
);

type IStore = mongoose.InferSchemaType<typeof StoreSchema>;

const Store = mongoose.model<IStore>("restaurant", StoreSchema);
export default Store;
