import mongoose from "mongoose";

const TableSchema = new mongoose.Schema(
  {
    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "store",
    },
    tableNumber: {
      type: Number,
      required: [true, "Table number is a required field"],
      default: 0,
    },
    capacity: {
      type: Number,
      default: 0,
      required: [true, "Table capacity is a required field"],
    },
    location: {
      type: String,
    },
    status: {
      type: String,
      required: [true, "table status is a required field"],
      default: "unavailable",
    },
  },
  {
    timestamps: true,
  }
);

type ITable = mongoose.InferSchemaType<typeof TableSchema>;

const Table = mongoose.model<ITable>("table", TableSchema);
export default Table;
