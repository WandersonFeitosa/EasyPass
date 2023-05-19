import { Router } from "express";
import { UserController } from "../controllers/UserController";

const routes = Router();

routes.post("/createUser",new UserController().createUser);
routes.post("/logUser",new UserController().logUser);

export default routes;
