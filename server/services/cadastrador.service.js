(function() {
  'use strict';
  var postgres = require('../../lib/postgres');
  
  exports.getCadastradores = function(req, res){
  	var sql = 'SELECT c.* FROM cadastrador c';
  	postgres.client.query(sql, function(err, results){
  		if(err){
  			console.log(err);
  			return res.status(500).json(err.detail);
  		}
  		res.status(200).json(results.rows);
  		res.end();
  	});
  }
}());