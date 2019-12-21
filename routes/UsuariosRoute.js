const UsuarioController = require('./../controller/UsuarioController')
class UsuarioRoute {

    constructor(app) {

        let ficha = new UsuarioController()

        app.route('/cadastrousuario')

            .post(UsuarioController.adicionar)



    }
}

module.exports = UsuarioRoute