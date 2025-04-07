import express from "express";
import { CowTypeController } from "./cowType.controller";

const router = express.Router();

router.post("/", CowTypeController.createCowType);
router.get("/", CowTypeController.getAllCowTypes);

export const CowTypeRoutes: express.Router = router;
