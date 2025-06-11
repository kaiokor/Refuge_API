import express from "express";
import HistoricoController from "../controller/historicoController.js";

const routes = express.Router()

routes.get("/historico", HistoricoController.listarHistorico)
routes.post("/historico", HistoricoController.cadastrarHistorico)
routes.delete("/historico/:id", HistoricoController.deletarHistorico)

export default routes