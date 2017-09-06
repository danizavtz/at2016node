(function() {
    'use strict';
    exports.cadastradorValidation = function(req, res, next){
		req.checkBody('nome','nome é obrigatório');
		req.checkBody('email','email é obrigatório');
		req.checkBody('login','login é obrigatório');
		req.checkBody('password','password é obrigatório');
		req.checkBody('permissao', 'permissao deve ser: "Cadastrador","Administrador","Usuario"').isIn(['Cadastrador','Administrador','Usuario']);

		req.getValidationResult().then((result) => {
            if (!result.isEmpty()) {
                return res.status(400).json({ errors: result.array() });
            }
            return next();
        });
    }
})();