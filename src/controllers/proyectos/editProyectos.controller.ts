import { Request, Response } from "express"
import { ProyectosModel } from "../../typegoose/bd/models/Proyectos"

export const editProyectoController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const updateData = req.body

        if (!id) return res.status(400).json({ message: "ID del proyecto es requerido" })

        const proyecto = await ProyectosModel.findByIdAndUpdate(id, updateData, { new: true })

        if (!proyecto) return res.status(404).json({ message: "proyecto no encontrado" })

        return res.status(200).json({ message: "proyecto actualizado correctamente", proyecto })
    } catch (err) {
        console.error("Error al actualizar el proyecto:", err);
        return res.status(500).json({ error: err, message: "Error al actualizar el proyecto" })
    }
}
