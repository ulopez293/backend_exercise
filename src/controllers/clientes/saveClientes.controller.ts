import { Request, Response } from "express"
import { z } from "zod"
import { ClientesModel } from "../../typegoose/bd/models/Clientes"

const Schema = z.object({
    nombre: z.string().trim().min(1, "El nombre es obligatorio"),
    email: z.string().trim().email("El correo no es válido"),
    telefono: z.string().trim().min(10, "El telefono es obligatorio"),
    id_usuario: z.string().trim().min(1, "Es requerido el id del usuario que registro al cliente"),
}).strict()

export const saveClientesController = async (req: Request, res: Response) => {
    try {
        const parsedData = Schema.parse(req.body)
        const { nombre, email, telefono, id_usuario  } = parsedData

        const newClient = new ClientesModel({
            nombre, correo: email, telefono, user_id: id_usuario
        })
        await newClient.save()

        return res.status(201).json({ message: "Guardado correctamente", data: newClient })
    } catch (err) {
        console.error("Error al guardar el cliente:", err)
        return res.status(500).json({ error: err , message: "Error al guardar el cliente" })
    }
}
