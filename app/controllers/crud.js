module.exports.create = function (application, req, res){
    var _connection = application.config.dbConfig();
    var blogModel = new application.app.models.blogDAO(_connection);
    
    var dados = req.body/* , arrayDados = [] */;
    //res.send(dados.name + "<br/>" + dados.phone + "<br/>" + dados.email +"<br/><a href='/read'>HOME</a>");
    
    /* arrayDados.push(dados.name);
    arrayDados.push(dados.phone);
    arrayDados.push(dados.email);
    res.send(arrayDados); */


    blogModel.create(dados, function(err, result){
        if (err) throw err;
        
        res.redirect('read');
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

module.exports.deleteRegistro = function(application, req, res){
    var _connection = application.config.dbConfig();
    var blogModel = new application.app.models.blogDAO(_connection);

    var blog_id = req.params.id;

    // _connection.query('delete from contact where id = ?', blog_id);
    //console.log("registro >>"+ blog_id +"<< apagado.");

    blogModel.deleteRegistro(blog_id, function(err){
        if (err) throw err;
        
        //console.log( req.params.id , "deletado");
        res.redirect('/todos_os_contatos');
    });
}