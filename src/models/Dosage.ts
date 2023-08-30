import mongoose, { Schema } from "mongoose";
import { IDosageType } from "../types/dosage";

const dosageSchema = new Schema<IDosageType>({
    drugname: { type: String, required: true },
    zipcode: { type: Number, required: true }
}, { timestamps: true })

const IDosage = mongoose.model("dosage", dosageSchema)
export default IDosage
