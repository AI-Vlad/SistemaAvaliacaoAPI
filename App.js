'use strict'

const Express = require('express');
const Cors = require('cors');
const Mongoose = require('mongoose');

const env = process.NODE_ENV || 'development'
const config = require('./config.json')[env]

//Importações dos modelos


const Usuario = require('./model/Usuario')
const UsuarioScan = require('./model/UsuarioScan');
const Compra = require("./model/Compra");

const Ficha = require("./model/Ficha")


class App {

    constructor() {
        this.app;
    }

    //Método para inicializar o objeto do Express
    init() {

        //Instanciar o express
        this.app = Express();

        //Conversor JSON-ObjetoJS
        this.app.use(Express.json())
        this.app.use(Cors())

        //Conectando com o banco mLab
        Mongoose.connect('mongodb+srv://Teste:testesenha@cluster0-1kj4i.mongodb.net/test?retryWrites=true&w=majority', {
                useNewUrlParser: true,

                useUnifiedTopology: true,

                useFindAndModify: false
            },


        )

        //Instanciando os modelos

        new Usuario()
        new UsuarioScan()
        new Compra()
        new Ficha()

        //Importações das rotas

        const CompraRoute = require('./routes/ComprasRoute')
        const UsuarioRoute = require('./routes/UsuariosRoute')
        const UsuarioScanRoute = require('./routes/UsuariosScanRoute')
        const FichaRoute = require("./routes/FichasRoute")

        //Instanciar a minha rotas


        new CompraRoute(this.app)
        new UsuarioScanRoute(this.app)
        new UsuarioRoute(this.app)
        new FichaRoute(this.app)

        //Rota Raíz
        this.app.get('/', function (req, res) {
            res.send('Bem-vindo ao TesteEstagio!')
        })

        //Listen
        this.app.listen(3000, () => console.log("conectado!"))

    }
}

new App().init()