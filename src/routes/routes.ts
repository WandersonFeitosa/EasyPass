import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { PasswordsControllers } from "../controllers/PasswordsController";

const routes = Router();

routes.post("/createUser", new UserController().createUser);
routes.post("/logUser", new UserController().logUser);

routes.post("/storePassword", new PasswordsControllers().storePassword);

export default routes;
