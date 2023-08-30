import Joi from "joi";
import { createDosage } from "../../controllers/dosage";
import { ApiError, Request, Response } from "../../helpers";
import { wrap } from "../../wrappers";

interface CreateDosageBodyProps {
    drugname: string,
    zipcode: number
}

const createDosageSchema = {
    reqQuery: Joi.object().length(0),
    reqBod: Joi.object({
        drugname: Joi.string().required(),
        zipcode: Joi.string().required()
    })
}

const createDosageApi = async (req: Request<CreateDosageBodyProps>, res: Response) => {
    const { drugname, zipcode } = req.body
    const createdosage = await createDosage({ drugname, zipcode })
    if (!createDosage) {
        throw new ApiError(401, "some thing wrong")
    }
    res.send(createdosage)
}

export default wrap(createDosageApi, {
    authedOnly: false,
    catch: true,
    validate: createDosageSchema,
})