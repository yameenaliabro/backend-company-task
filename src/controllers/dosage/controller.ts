import { ApiError } from "../../helpers";
import IDosage from "../../models/Dosage";
import { createHistoryProps, getDosageProps } from "./dto";

export const createHistory = async (props: createHistoryProps) => {
    const { drugname, userId } = props
    const dosage = new IDosage({
        drugname,
        userId
    })
    const createhistory = await dosage.save()
    return createhistory
}

export const getDosage = async (props: getDosageProps) => {
    const { drugname } = props;

    if (drugname) {
        const dosages = await IDosage.find({
            drugname: { $regex: drugname, $options: 'i' }
        });
        return dosages;
    } else {
        const dosages = await IDosage.find();
        return dosages;
    }
};
