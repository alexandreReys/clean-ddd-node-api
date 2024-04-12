import { Router } from "express";
import { CreateOrganizationController } from "@modules/organization/infra/http/controllers/OrganizationController";
import { authMiddleware } from "@modules/user/infra/http/middlewares/authMiddleware";

const organizationRouter = Router();

organizationRouter.use(authMiddleware);

organizationRouter.post("/", (request, response) => {
  new CreateOrganizationController().execute(request, response);
});

export default organizationRouter;
