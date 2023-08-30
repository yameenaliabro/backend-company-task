import { ApiError } from "../../helpers";
import IDosage from "../../models/Dosage";
import { createDosageProps, getDosageProps } from "./dto";

export const createDosage = async (props: createDosageProps) => {
    const { drugname, zipcode } = props
    const dosage = new IDosage({
        drugname,
        zipcode
    })
    const createdosage = await dosage.save()
    return createdosage
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
