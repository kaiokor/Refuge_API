import { usuario } from "../model/usuarioModel.js"

class UsuarioController {
    static async listarUsuarios(req, res) {
        try {
            const listaUsuarios = await usuario.find({})
            res.status(200).json(listaUsuarios)
        } catch (e) {
            res.status(500).json({ message: `${e} - Falha na requisição` })
        }
    }

    static async listarUsuariosPorId(req, res) {
        try {
            const id = req.params.id
            const listaUsuarios = await usuario.findById(id)
            res.status(200).json(listaUsuarios)
        } catch (e) {
            res.status(500).json({ message: `${e} - Falha na requisição` })
        }
    }

    static async cadastrarUsuario(req, res) {
        try {
            const novoUsuario = await usuario.create(req.body)
            res.status(201).json({ message: "Usuario cadastrado com sucesso!", usuario: novoUsuario })
        } catch (e) {
            res.status(500).json({ message: `${e} - Falha no cadastro` })
        }
    }

    static async atualizarUsuario(req, res) {
        try {
            const id = req.params.id
            await usuario.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: "Usuário atualizado com sucesso!" })
        } catch (e) {
            res.status(500).json({ message: `${e} - Falha na atualização` })
        }
    }

    static async deletarUsuario(req, res) {
        try {
            const id = req.params.id
            await usuario.findByIdAndDelete(id)
            res.status(200).json({ message: "Usuário deletado com sucesso" })
        } catch (e) {
            res.status(500).json({ message: `${e} - Falha ao deletar` })
        }
    }
}

export default UsuarioController