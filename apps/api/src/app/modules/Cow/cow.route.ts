import express from "express"
import { CowController } from "./cow.controller"
import validateRequest from "../../middlewares/validateRequest"
import { CowValidationSchema, toggleActiveStatusSchema } from "@rakhal/validation-schemas"
const router = express.Router()
router.get("/",CowController.getAllCows)
router.post("/",validateRequest(CowValidationSchema.createCowSchema),CowController.createCow)
router.patch("/:id",validateRequest(CowValidationSchema.updateCowSchema),CowController.updateCow)
router.patch("/:id/toggle-active",validateRequest(toggleActiveStatusSchema),CowController.toggleIsActiveCow)

export const CowRoutes:express.Router = router