import { Router } from "express"
const router = Router();

import { login, crear, listar, actualizar, obtener, eliminar } from '../repositories/usuarioRepository.js';

router.post("/api/usuario/login",  async (req, res) => {

  const result = await login(req.body)

   res.json(result)
})


router.post("/api/usuario/crear",  async (req, res) => {

  const result = await crear(req.body)

   res.json(result)
})

router.get("/api/usuario/listar",  async (req, res) => {

  const result = await listar()

   res.json(result)
})

router.post("/api/usuario/obtener",  async (req, res) => {

  const result = await obtener(req.body)

   res.json(result)
})

router.post("/api/usuario/actualizar",  async (req, res) => {

  const result = await actualizar(req.body)

   res.json(result)
})

router.post("/api/usuario/eliminar",  async (req, res) => {

  const result = await eliminar(req.body)

   res.json(result)
})



export default router