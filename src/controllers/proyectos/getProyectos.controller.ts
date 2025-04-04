import { Request, Response } from "express"
import { ProyectosModel } from "../../typegoose/bd/models/Proyectos"

export const getProyectosController = async (req: Request, res: Response) => {
    try {
        const proyectos = await ProyectosModel.find() 
        return res.status(200).json(proyectos)
    } catch (err) {
        console.error("Error al obtener proyectos:", err)
        return res.status(500).json({ error: err, message: "Error al obtener los proyectos" })
    }
}
