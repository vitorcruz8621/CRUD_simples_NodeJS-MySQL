module.exports.create = function (application, req, res){
    var _connection = application.config.dbConfig();
    var blogModel = new application.app.models.blogDAO(_connection);
    var dados = req.body;

    console.log(dados.name)

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

module.exports.update = function(application, req, res){
    
    //var id_blog = JSON.stringify(req.params.id)
    var id = req.params.id
    //console.log(id)
    console.log(JSON.stringify(req.params, null, 3) )
    var dados_link = req.params
    
    //res.redirect('/formulario_alterar_contato')/* .json({id_blog: id_blog}) */;
    res.render('formularios/formulario_alteracao', {dados: dados_link}/* {id: id} */);
}

module.exports.update_salvar = function(application, req, res){
    var _connection = application.config.dbConfig();
    var blogModel = new application.app.models.blogDAO(_connection);

    try{
        var _dados = req.body;        
        console.log("Quase lá")    
        console.log(_dados)
        /* console.log("--------------------")
        console.log(_dados.f_name)
        console.log(_dados.f_email)
        console.log(_dados.f_phone) */

        blogModel.update(_dados, function(err){
            if (err) throw err;
            res.redirect('/read');
        });
    } catch (err) {
        console.log("Deu merda!\n" + err)
    }
}