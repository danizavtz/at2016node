process.env.NODE_ENV = 'development';
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var config = require('./config/env.config')[process.env.NODE_ENV || 'development'];
var expressValidator = require('express-validator');
var pg = require('./lib/postgres');
var app = express();
app.disable('x-powered-by');

app.use(bodyParser.json({ type: 'application/*+json' }))
if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'));
}
app.use(expressValidator());
app.config = config;
//possui a configuração das rotas que o usuário pode acessar via o servidor
app.use('/', require('./server/routes'));
pg.initialize(app.config, function(err) {
  if (err) {
    return console.log(err);
  }
  app.listen(3000, function() {
    console.log('Aplicação servindo na porta 3000!')
  });
});