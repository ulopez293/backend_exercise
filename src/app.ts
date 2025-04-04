import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import { authRoutes } from './routes/auth.routes'
import { routes } from './routes/routes'

const app = express()

app.use(morgan('common'))
app.use(cors({
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))
app.use(bodyParser.json())
app.use(authRoutes)
app.use(routes)

export { app }