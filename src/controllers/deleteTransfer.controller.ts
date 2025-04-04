import { Request, Response } from "express"
import { TrasladosModel } from "../typegoose/bd/models/Traslados"

export const deleteTransfersController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        if (!id) return res.status(400).json({ message: "ID del traslado es requerido" })
        const traslado = await TrasladosModel.findByIdAndDelete(id)
        if (!traslado) return res.status(404).json({ message: "Traslado no encontrado" })

        return res.status(200).json({ message: "Traslado eliminado correctamente" })
    } catch (err) {
        console.error("Error al eliminar traslado:", err);
        return res.status(500).json({ error: err, message: "Error al eliminar traslado" });
    }
};
