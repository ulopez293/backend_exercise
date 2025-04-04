import { Request, Response } from "express"
import { UsuariosModel } from "../typegoose/bd/models/Usuarios"

export const getUsersController = async (req: Request, res: Response) => {
    try {
        const users = await UsuariosModel.find() 
        return res.status(200).json(users)
    } catch (err) {
        console.error("Error al obtener users:", err)
        return res.status(500).json({ error: err, message: "Error al obtener los users" })
    }
}
