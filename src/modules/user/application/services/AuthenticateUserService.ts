import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authConfig from "@config/auth";
import IUserRepository from "@modules/user/domain/repositories/IUserRepository";
import { IAuthenticateUserDTO } from "@modules/user/application/dtos/IAuthenticateUserDTO";

export class AuthenticateUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute({ email, password }: IAuthenticateUserDTO) {
    if (!email || !password) {
      throw new Error("email and password are required");
    }

    const { findByEmail } = this.userRepository;

    const user = await findByEmail(email);

    if (!user || !user.password) {
      throw new Error("Invalid email or password!");
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      throw new Error("Invalid email or password");
    }

    const { password: userPassword, ...userData } = user;

    const token = jwt.sign(userData, authConfig.jwt.secret ?? "", {
      expiresIn: authConfig.jwt.expiresIn,
    });

    return { userData, token };
  }
}
