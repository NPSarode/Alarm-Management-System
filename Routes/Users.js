import express from 'express'
import { addUser, getUserList } from '../Controller/Users.js';

export const UsersRoutes = express.Router()

UsersRoutes.get('/users', getUserList);
UsersRoutes.post('/user', addUser);