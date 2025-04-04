import { Request, Response } from "express"
import { ProyectosModel } from "../../typegoose/bd/models/Proyectos"

export const deleteProyectosController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        if (!id) return res.status(400).json({ message: "ID del proyecto es requerido" })
        const proyecto = await ProyectosModel.findByIdAndDelete(id)
        if (!proyecto) return res.status(404).json({ message: "proyecto no encontrado" })

        return res.status(200).json({ message: "proyecto eliminado correctamente" })
    } catch (err) {
        console.error("Error al eliminar proyecto:", err)
        return res.status(500).json({ error: err, message: "Error al eliminar proyecto" })
    }
}
