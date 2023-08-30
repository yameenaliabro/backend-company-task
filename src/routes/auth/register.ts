import Joi from "joi";
import { register } from "../../controllers/auth";
import { Request, Response } from "../../helpers";
import { wrap } from "../../wrappers";

interface createUser {
    username: string,
    email: string,
    password: string,

}

const registerUserSchema = {
    reqBody: Joi.object({
        username: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
    }),
    reqQuery: Joi.object().length(0)
}


const registerUserApi = async (req: Request<createUser>, res: Response) => {
    const { email, password, username } = req.body
    const createUser = await register({ email, password, username })
    res.send(createUser)
}

export default wrap(registerUserApi, {
    authedOnly: false,
    catch: true,
    validate: registerUserSchema
})