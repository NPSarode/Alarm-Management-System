import express from 'express'
import { getMachineList } from '../Controller/Machines.js'

export const MachineRoutes = express.Router()

MachineRoutes.get('/machines', getMachineList);