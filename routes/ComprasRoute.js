const ComprasController = require('./../controller/ComprasController')

class CompraRoute {

    constructor(app) {



        app.route('/compras')
            .get(ComprasController.buscarTodos)
            .post(ComprasController.adicionar)



    }
}

module.exports = CompraRoute