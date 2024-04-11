import { IUserDTO } from "@modules/user/application/dtos/IUserDTO";
import { ICreateUserDTO } from "../../application/dtos/ICreateUserDTO";

export default interface IUserRepository {
  findByEmail(email: string): Promise<IUserDTO | null>;
  create(data: ICreateUserDTO): Promise<IUserDTO | null>;
}
