import express from "express"
import authrouter from "./auth"
import doasageroutes from "./dosage"

const routes = express()
    .use("/auth", authrouter)
    .use("/dosage", doasageroutes)

export default routes