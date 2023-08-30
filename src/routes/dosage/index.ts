import express from "express"
import createDosage from "./create-dosage"
import getDosage from "./get-dosage"

const doasageroutes = express()
    .post("/", createDosage)
    .get("/search", getDosage)
export default doasageroutes