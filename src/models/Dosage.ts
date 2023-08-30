import mongoose, { Schema } from "mongoose";
import { IDosageType } from "../types/dosage";

const dosageSchema = new Schema<IDosageType>({
    drugname: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true })

const IDosage = mongoose.model("dosage", dosageSchema)
export default IDosage
