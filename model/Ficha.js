const Mongoose = require('mongoose')
class Ficha extends Mongoose.Schema {

    constructor() {
        super({
            data: {
                type: String,
                required: true
            },

            local: {
                type: String,
                required: true
            },
            fotos: {
                type: []
            },
            identificação: {
                type: String,
                required: true
            },
            rodovia: {
                type: String,
                required: true
            },
            risco: {
                type: String
            },


        })
        Mongoose.model('Ficha', this)

    }
}

module.exports = Ficha