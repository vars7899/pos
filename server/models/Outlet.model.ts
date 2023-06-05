import mongoose from "mongoose";

const OutletSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Outlet name is required field"],
      maxLength: [200, "Outlet name has a maximum character limit of 200"],
      minLength: [3, "Outlet name has a minimum character limit of 3"],
    },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "address",
    },
    phoneNumber: {
      countryCode: { type: Number, required: true, minLength: 1, maxLength: 10 },
      number: { type: Number, required: true, minLength: 1, maxLength: 10 },
    },
    email: {
      type: String,
      required: [true, "Outlet email is a required field"],
      unique: [true, "Outlet email already exist"],
      trim: [true],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Restaurant email provided is invalid",
      ],
      maxLength: [100, "Outlet email has maximum character limit of 100"],
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

type IOutlet = mongoose.InferSchemaType<typeof OutletSchema>;

const Outlet = mongoose.model<IOutlet>("restaurant", OutletSchema);
export default Outlet;
