module.exports.formulario = function (application, req, res) {

    res.render('formulario_inclusao');
    
    /* var _connection = application.config.dbConfig();
    var blogModel = new application.app.models.blogDAO(_connection);

    var dados = req.body;

    blogModel.read(function(err, result){
        if(err) throw err;

        res.render('index', {dadosBlog: result});
    }); */
}