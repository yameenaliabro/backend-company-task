import Joi from "joi";
import { updateUser } from "../../controllers/auth";
import { Request, Response } from "../../helpers";
import { wrap } from "../../wrappers";


interface updauseUserProp {
    username: string,
    email: string,
}

interface updateReqQuery {
    _id: string
}

const updateUserSchema = {
    reqQuery: Joi.object({
        _id: Joi.string().required()
    }),
    reqBody: Joi.object({
        username: Joi.string().optional(),
        email: Joi.string().optional(),
        userId: Joi.string().optional()
    })
}

const updateUserApi = async (req: Request<updauseUserProp, updateReqQuery>, res: Response) => {
    const { email, username } = req.body
    const { _id } = req.query
    const updateuser = await updateUser(_id as string, { email, username })
    res.send(updateuser)

}

export default wrap(updateUserApi, {
    authedOnly: false,
    catch: true,
    validate: updateUserSchema,
})