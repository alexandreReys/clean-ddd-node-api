import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";

const userRouter = Router();

userRouter.post("/", (request, response) => {
  new CreateUserController().execute(request, response);
});
userRouter.post("/login", (request, response) => {
  new AuthenticateUserController().execute(request, response);
});

export default userRouter;
