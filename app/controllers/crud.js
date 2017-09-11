module.exports.create = function (application, req, res){
    var _connection = application.config.dbConfig();
    var blogModel = new application.app.models.blogDAO(_connection);
    var dados = req.body;

    blogModel.create(dados, function(err, result){
        if (err) throw err;
        
        res.redirect('read');
    });
}

module.exports.deleteUmRegistro = function(application, req, res){
    var _connection = application.config.dbConfig();
    var blogModel = new application.app.models.blogDAO(_connection);

    var blog_id = req.params.id;
    
    blogModel.deleteUmRegistro(blog_id, function(err){
        if (err) throw err;
        
        //console.log( req.params.id , "deletado");
        res.redirect('/read');
    });
}

module.exports.read = function (application, req, res) {
    var _connection = application.config.dbConfig();
    var blogModel = new application.app.models.blogDAO(_connection);

    blogModel.read(function(err, result){
        if(err) throw err;

        res.render('todos_os_contatos', {dadosBlog: result});
    });
}

module.exports.readUmRegistro = function (application, req, res) {
    var _connection = application.config.dbConfig();
    var blogModel = new application.app.models.blogDAO(_connection);
    //var blog_id = parseInt (req.query.id);
    var blog_id = (req.query.id);

    blogModel.readUmRegistro(blog_id, function(err, result){
        if(err) throw err;

        res.render('contato_escolhido', {dadosBlog: result});
    });
}

module.exports.updateUmRegistro_p1 = function(application, req, res){
    res.redirect('/formulario_alterar_contato');
}

module.exports.updateUmRegistro_p2 = function(application, req, res){
    //
}

/* module.exports.deleteUmRegistro = function(application, req, res){
    var _connection = application.config.dbConfig();
    var blogModel = new application.app.models.blogDAO(_connection);

    var blog_id = req.params.id;
    
    blogModel.deleteUmRegistro(blog_id, function(err){
        if (err) throw err;
        
        //console.log( req.params.id , "deletado");
        res.redirect('/read');
    });
} */