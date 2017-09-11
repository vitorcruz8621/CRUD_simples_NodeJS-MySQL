module.exports.formulario_incluir = function (application, req, res) {
    res.render('./formularios/formulario_inclusao');
}

module.exports.formulario_pesquisar = function(application, req, res) {
    res.render('./formularios/formulario_pesquisa');
}

module.exports.formulario_alterar = function(application, req, res) {
    res.render('./formularios/formulario_alteracao');
}