import { Request, Response } from "express"
import { ClientesModel } from "../../typegoose/bd/models/Clientes"

export const getClientesController = async (req: Request, res: Response) => {
    try {
        const clientes = await ClientesModel.find() 
        return res.status(200).json(clientes)
    } catch (err) {
        console.error("Error al obtener clientes:", err)
        return res.status(500).json({ error: err, message: "Error al obtener los clientes" })
    }
}
