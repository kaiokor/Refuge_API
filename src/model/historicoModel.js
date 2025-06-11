import mongoose from "mongoose";
import { UsuarioSchema } from "./usuarioModel.js";
const historicoModel = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    usuario: UsuarioSchema,
    org: { type: String, required: true },
    tipoDoacao: { type: String, required: true },
    valor: { type: String, required: true },
    dataDoacao: { type: Date, default: Date.now },
    dadosAdicionais: { type: Object }
}, { versionKey: false })

const historico = mongoose.model("historico_doacao", historicoModel)

export default historico