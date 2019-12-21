const FichaController = require('./../controller/FichaController')
class FichaRoute {

    constructor(app) {

        let ficha = new FichaController()

        app.route('/cadastroficha')
            .get(FichaController.buscarTodos)
            .post(FichaController.adicionar)
            .put(FichaController.editar)

        app.route('/clientes/usuario')
            .post(FichaController.buscarClientePorUsuario)


    }
}

module.exports = FichaRoute