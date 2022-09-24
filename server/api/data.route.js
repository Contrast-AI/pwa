import express from "express"
import DataController from "./data.controller.js"

const router = express.Router()

router.route("/").get(DataController.apiGetData)
router.route("/cuisines").get(DataController.apiGetDataCuisines)

export default router