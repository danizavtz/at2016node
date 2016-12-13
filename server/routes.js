(function() {
    'use strict';

        var express = require('express');
        var router = express.Router();

        router.use(require('./controllers/trabalhador.controller'));
        
        router.get('/', function(req, res) {
            res.json('Hello World!')
        })
        // router.get('*', function(req, res) {
        //     res.status(404).send('<html><head><style>body {font-family: Helvetica, Arial, Sans-Serif;margin-top: 5em;}h1 {font-size: 3em;}h2 {font-size: 2em}</style></head></body><center><h1>Página não encontrada (Not Found)</h1><h2>(╯°□°）╯︵ ┻━┻</h2><br>O endereço solicitado não foi encontrado nesse servidor.<br>Verifique o url e tente novamente<br><h2>Erro: 404</h2></center></body></html>');
        // });

        module.exports = router;

}());
