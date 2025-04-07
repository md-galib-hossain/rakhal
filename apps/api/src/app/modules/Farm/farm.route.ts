import express from "express";
import { FarmController } from "./farm.controller.ts";

const router = express.Router();

router.get("/", FarmController.getAllFarms);
router.post("/", FarmController.createFarm);

export const FarmRoutes: express.Router = router;
