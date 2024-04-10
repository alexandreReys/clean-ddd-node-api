import { Router } from "express";
import organizationRouter from "../modules/organization/infra/http/routes/organizations.routes";

const routes = Router();

routes.use("/organizations", organizationRouter);

export default routes;
