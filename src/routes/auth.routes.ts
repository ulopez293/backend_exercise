import { Router } from "express"
import { validateJWT } from "../middleware/validateJWT"
import { saveClientesController } from "../controllers/clientes/saveClientes.controller"
import { getClientesController } from "../controllers/clientes/getClientes.controller"
import { editClienteController } from "../controllers/clientes/editClientes.controller"
import { deleteClientesController } from "../controllers/clientes/deleteClientes.controller"
// import { getUsersController } from "../controllers/getUsers.controller"

const authRoutes = Router()


// authRoutes.get("/users", validateJWT, getUsersController)

authRoutes.post("/clientes/save", validateJWT, saveClientesController)
authRoutes.get("/clientes", validateJWT, getClientesController)
authRoutes.put("/clientes/:id", validateJWT, editClienteController)
authRoutes.delete("/clientes/:id", validateJWT, deleteClientesController)


export { authRoutes }