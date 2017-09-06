(function() {
  'use strict';
  var postgres = require('../../lib/postgres');

  exports.getTrabalhadores = function(req, res) {
    var sql = 'SELECT t.* FROM trabalhador t';
    postgres.client.query(sql, function(err, results) {
    	if(err){
    		console.log(err);
    		return res.status(500).json(err.detail);
    	}
      res.status(200).json(results.rows);
      res.end();
    });
  }

}());