import * as Types from "./types";

// Register New User Data
export const RegisterUserData: Types.RegisterUserData = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
  dob: "",
  companySize: "small",
  companyName: "",
  companyLifeSpan: "",
  // Address fields
  street: "",
  addressLine: "",
  city: "",
  state: "",
  country: "",
  postalCode: "",
};

export const UserLoginData: Types.UserLoginData = {
  email: "",
  password: "",
};

export const NewAddressDetails: Types.Address = {
  street: "",
  addressLine: "",
  city: "",
  state: "",
  country: "",
  postalCode: "",
};
export const NewStoreChargeDetails = {
  taxes: "",
};

export const NewStoreDetails: Types.NewStoreInfo = {
  name: "",
  slogan: "",
  website: "",
  currency: "",
  status: false,
  days: {
    mon: false,
    tue: false,
    wed: false,
    thur: false,
    fri: false,
    sat: false,
    sun: false,
  },
  allowPickupOrder: false,
};