import IUserRepository from "@modules/user/domain/repositories/IUserRepository";
import { ICreateUserDTO } from "@modules/user/application/dtos/ICreateUserDTO";
import bcrypt from "bcrypt";

export class CreateUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(data: ICreateUserDTO) {
    const { findByEmail, create } = this.userRepository;

    const { name, email, password, phone } = data;

    const userExists = await findByEmail(email);

    if (userExists) {
      throw new Error("User e-mail already exists!");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = { name, email, password: hashPassword, phone };

    return create(newUser);
  }
}
