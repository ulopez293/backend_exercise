import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose"
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses"

@modelOptions({ schemaOptions: { timestamps: true } })
class Traslados extends TimeStamps {
    @prop({ type: String, required: true })
    partida: string

    @prop({ type: String, required: true })
    destino: string

    @prop({ type: String, required: true })
    transporte: string

    @prop({ type: Date, required: true })
    fecha: Date

    @prop({ type: Number, required: true, min: 1 })
    kilometros: number

    @prop({ type: String, required: true })
    trabajador: string

    @prop({ type: Boolean, default: false })
    idaVuelta: boolean
}

export const TrasladosModel = getModelForClass(Traslados)
