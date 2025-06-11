import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    sobrenome: { type: String, required: true },
    nacionalidade: { type: String, required: true },
    telefone: { type: String, required: true },
    cpf: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    pais: { type: String, required: true },
    bairro: { type: String, required: true },
    cep: { type: String, required: true },
    rua: { type: String, required: true },
    estado: { type: String, required: true },
    numero: { type: String, required: true },
    cidade: { type: String, required: true },
    complemento: { type: String, required: true },
    premium: { type: Boolean, default: false },
    refugeCoins: { type: Number, default: 0 }
}, { versionKey: false })

const usuario = mongoose.model("usuario", UsuarioSchema)

export { usuario, UsuarioSchema }
