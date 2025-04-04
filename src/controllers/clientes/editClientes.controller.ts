import { Request, Response } from "express"
import { ClientesModel } from "../../typegoose/bd/models/Clientes"

export const editClienteController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { nombre, correo, telefono } = req.body
        const updateData = { nombre, correo, telefono }

        if (!id) return res.status(400).json({ message: "ID del cliente es requerido" })

        const cliente = await ClientesModel.findByIdAndUpdate(id, updateData, { new: true })

        if (!cliente) return res.status(404).json({ message: "cliente no encontrado" })

        return res.status(200).json({ message: "cliente actualizado correctamente", cliente })
    } catch (err) {
        console.error("Error al actualizar el cliente:", err);
        return res.status(500).json({ error: err, message: "Error al actualizar el cliente" })
    }
}
