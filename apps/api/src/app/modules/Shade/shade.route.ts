import express from "express";
import { ShadeController } from "./shade.controller";

const router = express.Router();

router.get("/", ShadeController.getAllShades);
router.post("/", ShadeController.createShade);

export const ShadeRoutes: express.Router = router;
