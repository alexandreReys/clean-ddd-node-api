import { BaseController } from "src/core/infra/BaseController";
import { CreateUserService } from "../../../application/services/CreateUserService";
import { UserRepository } from "../../database/prisma/repositories/PrismaUserRepository";

export class CreateUserController extends BaseController {
  protected async executeImpl(): Promise<any> {
    const service = new CreateUserService(new UserRepository());

    try {
      const result = await service.execute(this.req.body);
      return this.created(this.res);
    } catch (err) {
      const error = err instanceof Error ? err : "An unknown error occurred";
      return this.clientError(error.toString());
    }
  }
}
