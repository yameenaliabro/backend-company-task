import mongoose, { Schema } from "mongoose";
import { IUser } from "../types";

const userSchema = new Schema<IUser>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true },

}, { timestamps: true });

export default mongoose.model<IUser>('User', userSchema);
