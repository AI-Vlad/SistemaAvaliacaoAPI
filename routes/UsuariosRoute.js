const UsuarioController = require('./../controller/UsuarioController')
class UsuarioRoute {

    constructor(app) {

        let ficha = new UsuarioController()

        app.route('/cadastrousuario')
            .get(UsuarioController.buscarTodos)
            .post(UsuarioController.adicionar)



    }
}

module.exports = UsuarioRoute