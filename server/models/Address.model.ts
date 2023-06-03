import { Schema, model } from "mongoose";

const AddressSchema = new Schema(
  {
    addressLine1: {
      type: String,
      required: [true, "Address Line 1 is a required field"],
      maxLength: [200, "Address Line 1 has a character limit of 200"],
    },
    addressLine2: {
      type: String,
      maxLength: [200, "Address Line 2 has a character limit of 200"],
    },
    city: {
      type: String,
      required: [true, "City is a required field"],
    },
    state: {
      type: String,
      required: [true, "State is a required field"],
    },
    country: {
      type: String,
      required: [true, "Country is a required field"],
    },
    postalCode: {
      type: String,
      required: [true, "Postal Code is a required field"],
    },
  },
  {
    timestamps: true,
  }
);

const Address = model("address", AddressSchema);
export default Address;
