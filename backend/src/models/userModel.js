import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { String, required: true },
    email: { String, required: true, unique: true },
    password: { String, required: true },
    isAdmin: { Boolean, required: true, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
