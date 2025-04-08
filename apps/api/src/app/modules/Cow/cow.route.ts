import express from "express"
import { CowController } from "./cow.controller"
import validateRequest from "../../middlewares/validateRequest"
import { CowValidationSchema } from "@rakhal/validation-schemas"
const router = express.Router()
router.get("/",CowController.getAllCows)
router.post("/",validateRequest(CowValidationSchema.createCowSchema),CowController.createCow)

export const CowRoutes:express.Router = router