import express from "express";
import UsuarioController from "../controller/usuarioController.js"

const routes = express.Router()

routes.get("/usuarios", UsuarioController.listarUsuarios)
routes.get("/usuarios/:id", UsuarioController.listarUsuariosPorId)
routes.post("/usuarios", UsuarioController.cadastrarUsuario)
routes.put("/usuarios/:id", UsuarioController.atualizarUsuario)
routes.delete("/usuarios/:id", UsuarioController.deletarUsuario)
export default routes