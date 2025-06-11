import express from "express";
import usuarios from "./usuarioRoutes.js"
import historico from './historicoRoutes.js'

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("API Refuge!"))
    app.use(express.json(), usuarios, historico)
}

export default routes