import { Types } from "mongoose"

export type IDosageType = {
    drugname: string,
    zipcode: number,
    userId: Types.ObjectId

}