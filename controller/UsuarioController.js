'use strict'
const Mongoose = require('mongoose')
const Usuario = Mongoose.model('Usuario')

let clientes = []
let cont = 3

class UsuarioController {




    static async adicionar(req, res) {
        try {
            let UsuarioNovo = req.body
            res.json(await Usuario.create(UsuarioNovo))
            console.log(req.body)

        } catch (error) {
            res.status(500).send(`Erro ao salvar cliente: ${error}`)
        }
    }



}
module.exports = UsuarioController