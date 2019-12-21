'use strict'
const Mongoose = require('mongoose')
const Ficha = Mongoose.model('Ficha')

let clientes = []
let cont = 3

class FichaController {

    static async buscarTodos(req, res) {
        try {
            res.json(await Ficha.find({}))
        } catch (error) {
            res.status(500).send(`Erro ao buscar clientes: ${error}`)
        }
    }

    static async buscarClientePorUsuario(req, res) {
        try {
            let objUsuario = req.body
            console.log("Objeto parametro da busca de cliente por usuario: " + JSON.stringify(objUsuario))
            res.json(await Ficha.find(objUsuario));
        } catch (error) {
            res.status(500).send(`Erro ao logar no sistema: ${error}`)
        }
    }

    static async adicionar(req, res) {
        try {
            let FichaNova = req.body
            res.json(await Ficha.create(FichaNova))
            console.log(req.body)

        } catch (error) {
            res.status(500).send(`Erro ao salvar cliente: ${error}`)
        }
    }

    static async editar(req, res) {
        try {
            let clienteEdicao = req.body
            res.status(200).json(await Ficha.findByIdAndUpdate(clienteEdicao._id, clienteEdicao))
        } catch (error) {
            res.status(500).send(`Erro ao editar o cliente: ${error}`)
        }

    }


}
module.exports = FichaController