import mongoose from "mongoose";
import { UserDocument } from "./user.model";

export interface SchemaDocument extends mongoose.Document {
  User: UserDocument["_id"];
  valid: boolean;
  userAgent: string;
  createAt: Date;
  updateAt: Date;
}

const sessionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    valid: { type: Boolean, default: true },
    userAgent: { type: String },
  },
  {
    timestamps: true,
  }
);

const sessionModel = mongoose.model("Session", sessionSchema);

export default sessionModel;
