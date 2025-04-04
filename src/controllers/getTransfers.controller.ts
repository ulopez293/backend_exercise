import { Request, Response } from "express"
import { TrasladosModel } from "../typegoose/bd/models/Traslados"

export const getTransfersController = async (req: Request, res: Response) => {
    try {
        const traslados = await TrasladosModel.find() 
        return res.status(200).json(traslados)
    } catch (err) {
        console.error("Error al obtener traslados:", err)
        return res.status(500).json({ error: err, message: "Error al obtener los traslados" })
    }
}
