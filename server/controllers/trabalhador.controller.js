(function() {
    'use strict';
    var express = require('express');
    var router = express.Router();
    var trabalhadorService = require('../services/trabalhador.service.js');


    router.get('/trabalhadores', trabalhadorService.getTrabalhadores);
    router.get('/trabalhadores/:id([0-9]+)');
    router.post('/trabalhadores');
    router.put('/trabalhadores');
    router.delete('/trabalhadores');

    module.exports = router;
}());
