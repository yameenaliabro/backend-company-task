import express from "express"
import createDosage from "./create-history"
import getDosage from "./get-dosage"

const doasageroutes = express()
    .post("/create", createDosage)
    .get("/search", getDosage)
export default doasageroutes