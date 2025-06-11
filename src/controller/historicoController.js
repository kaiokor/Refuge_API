import { usuario } from "../model/usuarioModel.js";
import historico from "../model/historicoModel.js";

class HistoricoController {
    static async listarHistorico(req, res) {
        try {
            const listarHistorico = await historico.find({})
            res.status(200).json(listarHistorico)
        } catch (e) {
            res.status(500).json({ message: `${e} - falha na requisição` })
        }
    }

    static async cadastrarHistorico(req, res) {
        const novoHistorico = req.body

        try {
            const usuarioEncontrado = await usuario.findById(novoHistorico.usuario)
            const historicoCompleto = { ...novoHistorico, usuario: { ...usuarioEncontrado._doc } }
            const historicoCriado = await historico.create(historicoCompleto)
            res.status(201).json({ message: "Historico cadastrado com sucesso", historico: historicoCriado })
        } catch (e) {
            res.status(500).json({ message: `${e} - falha no cadastro` })
        }
    }

    static async deletarHistorico(req, res) {
        try {
            const id = req.params.id
            await historico.findByIdAndDelete(id)
            res.status(200).json({ message: "Historico deletado" })
        } catch (e) {
            res.status(500).json({ message: `${e} - falha na exclusão do historico` })
        }
    }
}

export default HistoricoController