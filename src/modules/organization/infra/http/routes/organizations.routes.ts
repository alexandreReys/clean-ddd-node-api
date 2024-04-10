import { Router } from "express";
import {
  OrganizationController,
  CreateOrganizationController,
} from "../controllers/OrganizationController";

const organizationRouter = Router();

organizationRouter.post("/", (request, response) => {
  new CreateOrganizationController().execute(request, response);
});

export default organizationRouter;
