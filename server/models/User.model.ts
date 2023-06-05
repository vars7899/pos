import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "../config/validateEnv";

const SALT_ROUNDS: number = 10;

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is a required field"],
      maxLength: [50, "First name has maximum character limit of 50"],
      minLength: [3, "First name has minimum character limit of 3"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is a required field"],
      maxLength: [50, "Last name has maximum character limit of 50"],
      minLength: [3, "Last name has minimum character limit of 3"],
    },
    dob: {
      type: Date,
    },
    email: {
      type: String,
      required: [true, "Email is a required field"],
      unique: [true, "Email already exist"],
      trim: [true],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "email provided is invalid",
      ],
      maxLength: [100, "Email has maximum character limit of 100"],
    },
    password: {
      type: String,
      required: [true, "Password is a required field"],
    },
    otp: {
      value: String,
      expiresAt: Date,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isLocked: {
      type: Boolean,
      default: false,
    },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "address",
    },
    restaurant: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "restaurant",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Pre functions
UserSchema.pre("save", async function hashPassword(next) {
  let password: any = this.password;
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(password, SALT_ROUNDS);
  next();
});

// Generate Token
UserSchema.methods.generateToken = function () {
  // Creates a token that expires in 1 day
  return jwt.sign({ _id: this._id }, env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
};

// Match password
UserSchema.methods.matchPassword = async function (givenPassword: string) {
  return await bcrypt.compare(givenPassword, this.password);
};

export type IUser = mongoose.InferSchemaType<typeof UserSchema>;

const User = mongoose.model<IUser>("user", UserSchema);
export default User;
