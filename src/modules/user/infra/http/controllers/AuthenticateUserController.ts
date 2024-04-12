import { BaseController } from "src/core/infra/BaseController";
import { UserRepository } from "../../database/prisma/repositories/PrismaUserRepository";
import { AuthenticateUserService } from "@modules/user/application/services/AuthenticateUserService";
import { IUserDTO } from "@modules/user/application/dtos/IUserDTO";

export class AuthenticateUserController extends BaseController {
  protected async executeImpl(): Promise<any> {
    const service = new AuthenticateUserService(new UserRepository());

    try {
      const result = await service.execute(this.req.body);
      return this.ok(this.res, result);
    } catch (err) {
      const error = err instanceof Error ? err : "An unknown error occurred";
      return this.clientError(error.toString());
    }
  }
}
