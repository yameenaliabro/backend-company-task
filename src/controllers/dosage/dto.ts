import { Types } from "mongoose"

export type createHistoryProps = {
    drugname: string,
    userId: string
}

export type getDosageProps = {
    drugname: string
}
