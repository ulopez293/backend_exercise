import { Router } from "express"
import { validateJWT } from "../middleware/validateJWT"
import { saveClientesController } from "../controllers/clientes/saveClientes.controller"
// import { saveTransfersController } from "../controllers/saveTransfers.controller"
// import { getTransfersController } from "../controllers/getTransfers.controller"
// import { deleteTransfersController } from "../controllers/deleteTransfer.controller"
// import { editTransfersController } from "../controllers/editTransfer.controller"
// import { getUsersController } from "../controllers/getUsers.controller"

const authRoutes = Router()

// authRoutes.post("/traslados/save", validateJWT, saveTransfersController)
// authRoutes.get("/traslados", validateJWT, getTransfersController)
// authRoutes.get("/users", validateJWT, getUsersController)
// authRoutes.delete("/traslados/:id", validateJWT, deleteTransfersController)
// authRoutes.put("/traslados/:id", validateJWT, editTransfersController)

authRoutes.post("/clientes/save", validateJWT, saveClientesController)

export { authRoutes }