import express from "express"
import register from "./register"
import login from "./login"
import updateuser from "./updateuser"

const authrouter = express()
    .post("/register", register)
    .post("/login", login)
    .patch("/update", updateuser)

export default authrouter