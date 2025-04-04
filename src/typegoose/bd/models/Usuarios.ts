import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose"
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses"

@modelOptions({ schemaOptions: { timestamps: true } })
export class Usuarios extends TimeStamps {
    @prop({ type: String, required: true })
    name: string

    @prop({ type: String, required: true, unique: true, trim: true, lowercase: true })
    email: string

    @prop({ type: String, required: true })
    password: string
}

export const UsuariosModel = getModelForClass(Usuarios)
