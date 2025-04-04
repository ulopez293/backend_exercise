import { Router } from "express"
import { loginController } from "../controllers/auth/loginController"
import { registerUserController } from "../controllers/registerUser.controller"

const routes = Router()

routes.post("/auth", loginController)
routes.post("/register", registerUserController)

export { routes }