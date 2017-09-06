(function() {
  'use strict';
  var postgres = require('../../lib/postgres');

  exports.getTrabalhadores = function(req, res) {
    var sql = 'SELECT t.* FROM trabalhador t';
    postgres.client.query(sql, function(err, results) {
    	if(err){
    		console.log(err);
    		return res.json(err.detail);
    	}
      res.json(results.rows);
      res.end();
    });
  }

}());