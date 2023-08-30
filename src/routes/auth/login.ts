import Joi from "joi";
import { login } from "../../controllers/auth";
import { Request, Response } from "../../helpers";
import { wrap } from "../../wrappers";

interface loignUser {
    username: string,
    password: string,
}

const loginSchema = {
    reqQuery: Joi.object().length(0),
    reqBody: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
    })
}

const loginApi = async (req: Request<loignUser>, res: Response) => {
    const { password, username } = req.body
    const logiUser = await login({ password, username })
    res.send(logiUser)
}

export default wrap(loginApi, {
    authedOnly: false,
    catch: true,
    validate: loginSchema,
})