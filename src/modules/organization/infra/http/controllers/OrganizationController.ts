import { Request, Response, json } from "express";
import { BaseController } from "src/core/infra/BaseController";
import { CreateOrganizationService } from "../../../application/services/CreateOrganizationService";
import { OrganizationRepository } from "../../database/prisma/repositories/PrismaOrganizationRepository";

export class CreateOrganizationController extends BaseController {
  protected async executeImpl(): Promise<any> {
    const service = new CreateOrganizationService(new OrganizationRepository());

    try {
      const result = await service.execute(this.req.body);
      return this.created(this.res);
    } catch (err) {
      const error = err instanceof Error ? err : "An unknown error occurred";
      console.log("Error:", error.toString());
      return this.fail(error);
    }
  }
}
