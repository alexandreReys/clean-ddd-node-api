import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";

const userRouter = Router();

userRouter.post("/", (request, response) => {
  new CreateUserController().execute(request, response);
});

export default userRouter;
