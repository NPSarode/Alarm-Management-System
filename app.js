import { config } from 'dotenv'
import express from 'express'
import { MachineRoutes } from './Routes/Machines.js'
import { UsersRoutes } from './Routes/Users.js'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import cors from 'cors'
import { AlarmRoutes } from './Routes/Alarms.js'

export const app = express()


config({
    path: './.env'
})

app.use(express.json())
app.use(cookieParser())
app.use(morgan(':method :url :status :response-time ms - :res[content-length]'));
app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: 'Content-Type,Authorization',
    origin: process.env.FRONT_END_URI,
    credentials: true
}))


app.use(MachineRoutes)
app.use(UsersRoutes)
app.use(AlarmRoutes)