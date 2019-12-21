'use strict'
const Mongoose = require('mongoose');
const UsuarioScan = Mongoose.model("UsuarioScan");

class UsuarioScanController {

    static async buscarTodos(req, res) {

        try {
            res.json(await UsuarioScan.find({}));
        } catch (error) {
            res.status(500).send(`Erro ao buscar usuários: ${error}`);
        }
    }

    static async buscarPorNome(req, res) {
        try {
            let objBusca = req.body
            res.json(await Convidado.find(objBusca));
        } catch (error) {
            res.status(500).send(`Erro ao buscar convidado por nome: ${error}`)
        }
    }

    static async adicionar(req, res) {
        try {
            let usuarioNovo = req.body
            res.json(await UsuarioScan.create(usuarioNovo));

        } catch (error) {
            res.status(500).send(`Erro ao salvar usuário: ${error}`);
        }
    }

    static async editar(req, res) {
        try {
            let usuarioEdicao = req.body
            res.status(200).json(await UsuarioScan.findByIdAndUpdate(usuarioEdicao._id, usuarioEdicao))

        } catch (error) {
            res.status(500).send(`Erro ao editar o usuário: ${error}`);
        }
    }

    static async deletar(req, res) {
        try {
            let id = req.params.id
            let objDeletar = {}
            objDeletar._id = id

            res.status(200).json(await UsuarioScan.findByIdAndDelete(objDeletar))
        } catch (error) {
            res.status(500).send(`Erro ao remover usuário: ${error}`)
        }
    }

    static async autenticar(req, res) {
        try {
            let objUsuario = req.body
            res.json(await UsuarioScan.find(objUsuario));
        } catch (error) {
            res.status(500).send(`Erro ao logar no sistema: ${error}`)
        }
    }
}

module.exports = UsuarioScanController;