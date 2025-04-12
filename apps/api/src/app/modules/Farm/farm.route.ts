import express from "express";
import { FarmController } from "./farm.controller";
import validateRequest from "../../middlewares/validateRequest";
import { FarmValidationSchema, toggleActiveStatusSchema } from "@rakhal/validation-schemas";

const router = express.Router();

router.get("/", FarmController.getAllFarms);
router.get("/:id", FarmController.getSingleFarm);
router.post(
  "/",
  validateRequest(FarmValidationSchema.createFarmSchema),
  FarmController.createFarm
);
router.patch(
  "/:id",
  validateRequest(FarmValidationSchema.updateFarmSchema),
  FarmController.updateFarm
);
router.patch(
  "/:id/toggle-active",
  validateRequest(toggleActiveStatusSchema),
  FarmController.toggleIsActiveFarm
);

export const FarmRoutes: express.Router = router;