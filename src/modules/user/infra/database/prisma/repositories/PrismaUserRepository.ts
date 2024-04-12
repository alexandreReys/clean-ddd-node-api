import { User } from "@modules/user/domain/entities/User";
import IUserRepository from "@modules/user/domain/repositories/IUserRepository";
import { prismaClient } from "src/infra/database/prismaClient";
import { ICreateUserDTO } from "@modules/user/application/dtos/ICreateUserDTO";
import { IUserDTO } from "@modules/user/application/dtos/IUserDTO";

export class UserRepository implements IUserRepository {
  constructor() {}

  async findByEmail(email: string): Promise<IUserDTO | null> {
    const userData = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    return userData;
  }

  async create(data: ICreateUserDTO): Promise<IUserDTO | null> {
    const convertToUserDTO = (userData: IUserDTO | null) => {
      if (!userData) return null;

      const { id, name, email, phone } = userData;
      const user = new User(id, name, email, "", phone);

      return user.toDTO();
    };

    const userData = await prismaClient.user.create({
      data: {
        ...data,
      },
    });

    return convertToUserDTO(userData);
  }
}
