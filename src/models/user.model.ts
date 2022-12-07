import mongoose from "mongoose";
import config from "config";
import bcrypt from "bcrypt";

export interface UserDocument extends mongoose.Document {
  email: string;
  name: string;
  password: string;
  createAt: Date;
  updateAt: Date;
  comparePassword(candidatePassport: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema(
  {
    email: { type: String, require: true, unique: true },
    name: { type: String, require: true },
    password: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next: mongoose.HookNextFunction) {
  let user = this as UserDocument;

  if (!user.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));
  const hash = bcrypt.hashSync(user.password, salt);

  user.password = hash;

  return next();
});

userSchema.methods.comparePassword = async function (
  candidatePassport: string
): Promise<boolean> {
  const user = this as UserDocument;

  return bcrypt.compare(candidatePassport, user.password).catch(() => false);
};

const User = mongoose.model<UserDocument>("User", userSchema);

export default User;
