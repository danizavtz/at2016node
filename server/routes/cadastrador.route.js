(function() {
    'use strict';
    var express = require('express');
    var router = express.Router();
    var cadastradorService = require('../services/cadastrador.service.js');

    router.post('/cadastradores');
    router.get('/cadastradores', cadastradorService.getCadastradores);
    router.get('/cadastradores/:id([0-9]+)');
    router.put('/cadastradores/:id([0-9]+)');
    router.delete('/cadastradores/:id([0-9]+)');

    module.exports = router;
})();