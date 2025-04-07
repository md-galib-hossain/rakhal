import express from "express";
import { GroupController } from "./group.controller";

const router = express.Router();

router.get("/", GroupController.getAllGroups);
router.post("/", GroupController.createGroup);

export const GroupRoutes: express.Router = router;
