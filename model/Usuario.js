const Mongoose = require('mongoose')
class Usuario extends Mongoose.Schema {

    constructor() {
        super({
            nome: {
                type: String,
                required: true
            },

            email: {
                type: String,
                required: true
            },
            cpf: {
                type: String
            },
            senha: {
                type: String,
                required: true
            },


        })
        Mongoose.model('Usuario', this)

    }
}

module.exports = Usuario