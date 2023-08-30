import Joi from "joi";
import { getDosage } from "../../controllers/dosage";
import { Request, Response } from "../../helpers";
import { wrap } from "../../wrappers";

interface GetDosageQuery {
    drugname: string
}

const getDosageSchema = {
    reqQuery: Joi.object({
        drugname: Joi.string().optional(),
    }),
    reqBody: Joi.object().length(0)
}
const getDosageApi = async (req: Request<GetDosageQuery>, res: Response) => {
    const { drugname } = req.query
    const data = await getDosage({ drugname })
    res.json({ data })
}

export default wrap(getDosageApi, {
    authedOnly: false,
    catch: true,
    validate: {}
})
