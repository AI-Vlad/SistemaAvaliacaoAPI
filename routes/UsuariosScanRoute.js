const UsuarioScanController = require('./../controller/UsuarioScanController')

class UsuarioScanRoute {

    constructor(app) {

        app.route('/usuarios')
            .get(UsuarioScanController.buscarTodos)
            .post(UsuarioScanController.adicionar)
            .put(UsuarioScanController.editar)

        app.route('/usuarios/:id')
            .delete(UsuarioScanController.deletar)

        app.route('/usuarios/busca')
            .get(UsuarioScanController.buscarPorNome)

        app.route('/autenticar')
            .post(UsuarioScanController.autenticar)

    }
}

module.exports = UsuarioScanRoute;