import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import authConfig from "@config/auth";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void | Response {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "JWT token is missing" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { secret } = authConfig.jwt;
    const decoded = jwt.verify(token, secret ?? "");
    const { iat, exp, ...user } = decoded as JwtPayload;

    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ error: "Unauthorized" });
  }
}
