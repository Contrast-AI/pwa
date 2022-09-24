import express from "express"
import cors from "cors"
import data from "./api/data.route.js"

const app = express()

app.use(cors())
// server can accept JSON in body of request
app.use(express.json())

app.use("/api/v1/data", data)
// where theyre sent if they try going to bad route
app.use("*", (req, res) => res.status(404).json({ error: "not found. try http://localhost:3000/api/v1/data"}))

export default app