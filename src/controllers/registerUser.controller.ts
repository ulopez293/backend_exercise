import { Request, Response } from "express"
import bcrypt from "bcrypt"
import { UsuariosModel } from "../typegoose/bd/models/Usuarios"
import { z } from "zod"

const registerSchema = z.object({
    name: z.string().trim().min(1, "El nombre es obligatorio"),
    email: z.string().trim().email("El correo no es válido"),
    password: z.string().trim().min(6, "La contraseña debe tener al menos 6 caracteres"),
}).strict()

export const registerUserController = async (req: Request, res: Response) => {
    try {
        const parsedData = registerSchema.parse(req.body)
        const { name, email, password } = parsedData

        const existingUser = await UsuariosModel.findOne({ email })
        if (existingUser) return res.status(400).json({ error: "El correo ya está registrado" })


        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await UsuariosModel.create({
            name,
            email,
            password: hashedPassword
        })

        res.status(201).json({ 
            message: "Usuario registrado exitosamente", 
            user: {
                name: newUser.name,
                email: newUser.email,
                id: newUser._id
            } 
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Error al registrar usuario", err: err })
    }
}
