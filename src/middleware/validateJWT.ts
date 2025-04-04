import dotenv from 'dotenv'
import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"

dotenv.config()

export const validateJWT = async (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers.authorization
    if (!token) return res.status(400).json({ error: 'Token no proporcionado' })
    token = token.substring(7)

    try {
        jwt.verify(token, process.env.KEY_JSON_WEB_TOKEN as string)
        next()
    } catch (error) {
        return res.status(400).json({ error: 'Token Invalido', error_token: error })
    }
}