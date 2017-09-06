module.exports.menuPrincipal = function (application, req, res) {
    var _connection = application.config.dbConfig();
    var blogModel = new application.app.models.blogDAO(_connection);

    blogModel.index(function(err, result){
        if(err) throw err;

        res.render('index', {dadosBlog: result});
    });
};