const FichaController = require('./../controller/FichaController')
class FichaRoute {

    constructor(app) {

        let ficha = new FichaController()

        app.route('/cadastroficha')
            .get(FichaController.buscarTodos)
            .post(FichaController.adicionar)
            

        


    }
}

module.exports = FichaRoute