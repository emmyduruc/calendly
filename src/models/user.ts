import mongoose, { Document } from "mongoose";

export type UserDocument = Document & {
  //do not specify it
  email: string;
  firstName: string;
  lastName: string;
  date: Date;
  meeting: string[]
};

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 40,
      unique: true,
    },
    LastName: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    meeting: {
        type: [String],
        default: [],
      },
  },
  { timestamps: true }
);

export default mongoose.model<UserDocument>("Users", UserSchema);
