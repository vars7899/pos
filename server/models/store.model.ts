import mongoose from "mongoose";

const StoreSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Store name is required field"],
      maxLength: [100, "Store name has a maximum character limit of 100"],
      minLength: [4, "Store name has a minimum character limit of 4"],
      unique: [true, "Store name has to be unique"],
    },
    slogan: {
      type: String,
      maxLength: [100, "Store slogan has a maximum character limit of 100"],
    },
    storeUrl: {
      type: String,
    },
    currency: {
      type: String,
      required: [true, "Operational currency is a required field"],
    },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "address",
      required: [true, "Store Address is a required field"],
    },
    status: {
      type: Boolean,
      required: [true, "Store operational status is a required field"],
      default: false,
    },
    days: {
      mon: { type: Boolean, default: false, required: true },
      tue: { type: Boolean, default: false, required: true },
      wed: { type: Boolean, default: false, required: true },
      thur: { type: Boolean, default: false, required: true },
      fri: { type: Boolean, default: false, required: true },
      sat: { type: Boolean, default: false, required: true },
      sun: { type: Boolean, default: false, required: true },
    },
    allowPickupOrders: { type: Boolean, default: false, required: true },
    charges: {
      taxes: { type: Number, default: 0 },
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
