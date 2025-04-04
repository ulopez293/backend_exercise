import { Request, Response } from "express"
import { TrasladosModel } from "../typegoose/bd/models/Traslados"

export const editTransfersController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const updateData = req.body

        if (!id) return res.status(400).json({ message: "ID del traslado es requerido" })

        const traslado = await TrasladosModel.findByIdAndUpdate(id, updateData, { new: true })

        if (!traslado) return res.status(404).json({ message: "Traslado no encontrado" })

        return res.status(200).json({ message: "Traslado actualizado correctamente", traslado })
    } catch (err) {
        console.error("Error al actualizar el traslado:", err);
        return res.status(500).json({ error: err, message: "Error al actualizar el traslado" })
    }
}
