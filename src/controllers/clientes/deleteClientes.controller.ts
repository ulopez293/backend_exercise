import { Request, Response } from "express"
import { ClientesModel } from "../../typegoose/bd/models/Clientes"

export const deleteClientesController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        if (!id) return res.status(400).json({ message: "ID del cliente es requerido" })
        const cliente = await ClientesModel.findByIdAndDelete(id)
        if (!cliente) return res.status(404).json({ message: "cliente no encontrado" })

        return res.status(200).json({ message: "cliente eliminado correctamente" })
    } catch (err) {
        console.error("Error al eliminar cliente:", err)
        return res.status(500).json({ error: err, message: "Error al eliminar cliente" })
    }
}
