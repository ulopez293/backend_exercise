import { Router } from "express"
import { validateJWT } from "../middleware/validateJWT"
import { saveClientesController } from "../controllers/clientes/saveClientes.controller"
import { getClientesController } from "../controllers/clientes/getClientes.controller"
import { editClienteController } from "../controllers/clientes/editClientes.controller"
import { deleteClientesController } from "../controllers/clientes/deleteClientes.controller"
import { saveProyectosController } from "../controllers/proyectos/saveProyectos.controller"
import { getProyectosController } from "../controllers/proyectos/getProyectos.controller"
import { editProyectoController } from "../controllers/proyectos/editProyectos.controller"
import { deleteProyectosController } from "../controllers/proyectos/deleteProyectos.controller"
// import { getUsersController } from "../controllers/getUsers.controller"

const authRoutes = Router()


// authRoutes.get("/users", validateJWT, getUsersController)

authRoutes.post("/clientes/save", validateJWT, saveClientesController)
authRoutes.get("/clientes", validateJWT, getClientesController)
authRoutes.put("/clientes/:id", validateJWT, editClienteController)
authRoutes.delete("/clientes/:id", validateJWT, deleteClientesController)

authRoutes.post("/proyectos/save", validateJWT, saveProyectosController)
authRoutes.get("/proyectos", validateJWT, getProyectosController)
authRoutes.put("/proyectos/:id", validateJWT, editProyectoController)
authRoutes.delete("/proyectos/:id", validateJWT, deleteProyectosController)


export { authRoutes }