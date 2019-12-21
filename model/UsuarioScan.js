const mongoose = require('mongoose');


class UsuarioScan extends mongoose.Schema {

    constructor() {

        super({
            ativo: {
                type: Boolean
            },
            username: {
                type: String
            },
            senha: {
                type: String
            },
            tipo: {
                type: String
            }
        });
        mongoose.model('UsuarioScan', this);
    }
}

module.exports = UsuarioScan;