import express from 'express';
import cors from 'cors';
import usuarioController from './controllers/usuarioController.js';

const app = express()

app.use(cors())

app.use(express.json())

app.use(usuarioController)

app.listen(3000)