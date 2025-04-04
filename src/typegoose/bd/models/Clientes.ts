import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose"
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses"
import { Usuarios } from "./Usuarios"

@modelOptions({ schemaOptions: { timestamps: true } })
export class Clientes extends TimeStamps {
    @prop({ required: true })
    nombre: string

    @prop({ required: true, unique: true, trim: true, lowercase: true })
    correo: string

    @prop({ required: true, trim: true })
    telefono: string

    @prop({ ref: () => Usuarios, required: true }) // Relación con Usuarios
    user_id: Ref<Usuarios>
}

export const ClientesModel = getModelForClass(Clientes)
