import express from "express";
import { ShadeController } from "./shade.controller";
import validateRequest from "../../middlewares/validateRequest";
import { ShadeValidationSchema, toggleActiveStatusSchema } from "@rakhal/validation-schemas";

const router = express.Router();

router.get("/", ShadeController.getAllShades);
router.get("/:id", ShadeController.getSingleShade);
router.post(
  "/",
  validateRequest(ShadeValidationSchema.createShadeSchema),
  ShadeController.createShade
);
router.patch(
  "/:id",
  validateRequest(ShadeValidationSchema.updateShadeSchema),
  ShadeController.updateShade
);
router.patch(
  "/:id/toggle-active",
  validateRequest(toggleActiveStatusSchema),
  ShadeController.toggleIsActiveShade
);

export const ShadeRoutes: express.Router = router;