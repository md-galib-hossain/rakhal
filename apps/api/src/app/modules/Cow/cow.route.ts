import express from "express"
import { CowController } from "./cow.controller"
const router = express.Router()
router.get("/",CowController.getAllCows)
router.post("/",CowController.createCow)

export const CowRoutes:express.Router = router