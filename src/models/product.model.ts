import mongoose from "mongoose";
import { UserDocument } from "./user.model";

export interface ProductDocument extends mongoose.Document {
  User: UserDocument["_id"];
  mantap: string;
  createAt: Date;
  updateAt: Date;
}

const productSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    mantap: { type: String },
  },
  {
    timestamps: true,
  }
);

const productModel = mongoose.model("Session", productSchema);

export default productModel;
