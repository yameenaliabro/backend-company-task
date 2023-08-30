import Joi from "joi";
import { ApiError, Request, Response } from "../../helpers";
import { wrap } from "../../wrappers";
import { createHistory } from "../../controllers/dosage";

interface CreateDosageBodyProps {
    drugname: string,
    userId: string
}

const createDosageSchema = {
    reqQuery: Joi.object().length(0),
    reqBod: Joi.object({
        drugname: Joi.string().required(),
        zipcode: Joi.string().required()
    })
}

const createHistoryApi = async (req: Request<CreateDosageBodyProps>, res: Response) => {
    const { drugname, userId } = req.body
    const createdosage = await createHistory({ drugname, userId })
    if (!createdosage) {
        throw new ApiError(401, "some thing wrong")
    }
    res.send(createdosage)
}

export default wrap(createHistoryApi, {
    authedOnly: false,
    catch: true,
    validate: {},
})