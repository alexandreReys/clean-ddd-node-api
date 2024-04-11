import { Router } from "express";
import organizationRouter from "../modules/organization/infra/http/routes/organizations.routes";
import userRouter from "../modules/user/infra/http/routes/users.routes";

const routes = Router();

routes.use("/organizations", organizationRouter);
routes.use("/users", userRouter);

export default routes;
