(function() {
    'use strict';
    var express = require('express');
    var router = express.Router();
    var trabalhadorService = require('../services/trabalhador.service.js');
    var trabalhadorValidator = require('../validators/trabalhador.validator.js');


    router.post('/trabalhadores');
    router.get('/trabalhadores', trabalhadorService.getTrabalhadores);
    router.get('/trabalhadores/:id([0-9]+)');
    router.put('/trabalhadores/:id([0-9]+)');
    router.delete('/trabalhadores/:id([0-9]+)');

    module.exports = router;
}());
