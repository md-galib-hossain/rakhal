import express from "express";
import { CowTypeController } from "./cowType.controller";
import validateRequest from "../../middlewares/validateRequest";
import { CowTypeValidationSchema, toggleActiveStatusSchema } from "@rakhal/validation-schemas";

const router = express.Router();

router.get("/", CowTypeController.getAllCowTypes);
router.get("/:id", CowTypeController.getSingleCowType);
router.post(
  "/",
  validateRequest(CowTypeValidationSchema.createCowTypeSchema),
  CowTypeController.createCowType
);
router.patch(
  "/:id",
  validateRequest(CowTypeValidationSchema.updateCowTypeSchema),
  CowTypeController.updateCowType
);
router.patch(
  "/:id/toggle-active",
  validateRequest(toggleActiveStatusSchema),
  CowTypeController.toggleIsActiveCowType
);

export const CowTypeRoutes: express.Router = router;