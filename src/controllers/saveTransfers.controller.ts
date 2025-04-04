import { Request, Response } from "express"
import { TrasladosModel } from "../typegoose/bd/models/Traslados"
import { z } from "zod"

const trasladoSchema = z.object({
    partida: z.string().trim().min(1, "La partida es obligatoria"),
    destino: z.string().trim().min(1, "El destino es obligatorio"),
    transporte: z.string().trim().min(1, "El transporte es obligatorio"),
    fecha: z.preprocess((val) => new Date(val as string), z.date().refine((date) => !isNaN(date.getTime()), "Fecha no válida")),
    kilometros: z.preprocess(
        (val) => Number(val),
        z.number().min(1, "Los kilómetros deben ser al menos 1")
    ),
    trabajador: z.string().trim().min(1, "El trabajador es obligatorio"),
    idaVuelta: z.boolean().optional().default(false)
})

export const saveTransfersController = async (req: Request, res: Response) => {
    try {
        const parsedData = trasladoSchema.parse(req.body)
        const { partida, destino, transporte, fecha, kilometros, trabajador, idaVuelta } = parsedData

        if (!partida || !destino || !transporte || !fecha || !kilometros || !trabajador) {
            return res.status(400).json({ error: "Todos los campos son obligatorios" })
        }

        const newTransfer = new TrasladosModel({
            partida,
            destino,
            transporte,
            fecha,
            kilometros,
            trabajador,
            idaVuelta
        })

        await newTransfer.save()

        return res.status(201).json({ message: "Traslado guardado correctamente", data: newTransfer })
    } catch (err) {
        console.error("Error al guardar el traslado:", err)
        return res.status(500).json({ error: err , message: "Error al guardar el traslado" })
    }
}
