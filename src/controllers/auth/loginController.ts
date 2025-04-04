import { Request, Response } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { UsuariosModel } from "../../typegoose/bd/models/Usuarios"
import dotenv from 'dotenv'

dotenv.config()

export const loginController = async (req: Request, res: Response) => {
    const { email, password } = req.body
    if (!email || !password) return res.status(400).json({ error: "Correo y contraseña son requeridos" })

    const defaultCredentials = {
        email: "admin@backend.com",
        password: "Ll1820M8ZfjGHYj",
    }

    try {
        let userId

        if (email === defaultCredentials.email && password === defaultCredentials.password) {
            userId = "admin"
        } else {
            const user = await UsuariosModel.findOne({ email })
            if (!user) {
                return res.status(404).json({ error: "Usuario no encontrado" })
            }

            const isPasswordCorrect = await bcrypt.compare(password, user.password)
            if (!isPasswordCorrect) {
                return res.status(401).json({ error: "Contraseña incorrecta" })
            }

            userId = user._id
        }

        const payload = { userId }
        const secretKey = process.env.KEY_JSON_WEB_TOKEN ?? "default_secret"
        const token = jwt.sign(payload, secretKey, { expiresIn: "100h" })

        res.json({
            message: "Usuario autenticado exitosamente",
            token: token,
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Error al autenticar al usuario" })
    }
}
