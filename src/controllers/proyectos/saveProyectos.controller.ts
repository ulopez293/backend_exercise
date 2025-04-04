import { Request, Response } from "express"
import { z } from "zod"
import { ProyectosModel } from "../../typegoose/bd/models/Proyectos"

const Schema = z.object({
    nombre: z.string().trim().min(1, "El nombre es obligatorio"),
    descripcion: z.string().trim().min(1, "El descripcion es obligatorio"),
    estado: z.string().trim().min(1, "El estado es obligatorio"),
    fecha_inicio: z.preprocess((val) => new Date(val as string), z.date().refine((date) => !isNaN(date.getTime()), "Fecha no válida")),
    fecha_entrega: z.preprocess((val) => new Date(val as string), z.date().refine((date) => !isNaN(date.getTime()), "Fecha no válida")),
    cliente_id: z.string().trim().min(1, "El cliente_id es obligatorio"),
}).strict()

export const saveProyectosController = async (req: Request, res: Response) => {
    try {
        const parsedData = Schema.parse(req.body)
        const {
            nombre,
            descripcion,
            estado,
            fecha_inicio,
            fecha_entrega,
            cliente_id
        } = parsedData

        const newProyecto = new ProyectosModel({
            nombre,
            descripcion,
            estado,
            fecha_inicio,
            fecha_entrega,
            cliente_id
        })
        await newProyecto.save()

        return res.status(201).json({ message: "Guardado correctamente", data: newProyecto })
    } catch (err) {
        console.error("Error al guardar el proyecto:", err)
        return res.status(500).json({ error: err , message: "Error al guardar el proyecto" })
    }
}
