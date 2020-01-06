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

  

    static async adicionar(req, res) {
        try {
            let FichaNova = req.body
            res.json(await Ficha.create(FichaNova))
            console.log(req.body)

        } catch (error) {
            res.status(500).send(`Erro ao salvar cliente: ${error}`)
        }
    }

   


}
module.exports = FichaController