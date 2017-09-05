module.exports.menuPrincipal = function (application, req, res) {
    var _connection = application.config.dbConfig();
    var blogModel = new application.app.models.blogDAO(_connection);

    blogModel.index(function(err, result){
        if(err) throw err;

        res.render('index', {dadosBlog: result});
    });
};

/* module.exports.read = function (application, req, res) {
    var _connection = application.config.dbConfig();
    var blogModel = new application.app.models.blogDAO(_connection);

    var dados = req.body;

    blogModel.read(function(err, result){
        if(err) throw err;

        res.render('index', {dadosBlog: result});
    });
}

module.exports.create = function (application, req, res){
    var _connection = application.config.dbConfig();
    var blogModel = new application.app.models.blogDAO(_connection);

    blogModel.create(function(err, result){
        if (err) throw err;

        res.render('index', {dadosBlog: result} );
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
        res.redirect('/');
        res.end();
    });
} */