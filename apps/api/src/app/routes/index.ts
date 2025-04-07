import express from "express";
import { CowRoutes } from "../modules/Cow/cow.route";
import { CowTypeRoutes } from "../modules/CowType/cowType.route";
import { ShadeRoutes } from "../modules/Shade/shade.route";
import { GroupRoutes } from "../modules/Group/group.route";
import { FarmRoutes } from "../modules/Farm/farm.route";
import { UserRoutes } from "../modules/User/user.route";

const router: express.Router = express.Router();

const moduleRoutes = [
  {
    path: "/cow",
    route: CowRoutes,
  },
  {
    path: "/cow-type",
    route: CowTypeRoutes,
  },
  {
    path: "/shade",
    route: ShadeRoutes,
  },
  {
    path: "/group",
    route: GroupRoutes,
  },
  {
    path: "/farm",
    route: FarmRoutes,
  },
  {
    path: "/user",
    route: UserRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
