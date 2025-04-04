import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose"
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses"
import { Clientes } from "./Clientes"

@modelOptions({ schemaOptions: { timestamps: true } })
class Proyectos extends TimeStamps {
    @prop({ required: true })
    nombre: string

    @prop({ required: true })
    descripcion: string

    @prop({ required: true, enum: ["pendiente", "progreso", "completado"], default: "pendiente" })
    estado: string

    @prop({ required: true })
    fecha_inicio: Date

    @prop({ required: true })
    fecha_entrega: Date

    @prop({ ref: () => Clientes, required: true }) // Relación con Clientes
    cliente_id: Ref<Clientes>
}

export const ProyectosModel = getModelForClass(Proyectos)
