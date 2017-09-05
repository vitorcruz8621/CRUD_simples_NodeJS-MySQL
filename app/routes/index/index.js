module.exports = function(application){

    var index_path = application.app.controllers.index;

    application.get('/', (req, res)=>{
        index_path.menuPrincipal(application, req, res);
    });

    application.get('/home', (req, res)=>{
        index_path.menuPrincipal(application, req, res);
    });

    application.get('/index', (req, res)=>{
        index_path.menuPrincipal(application, req, res);
    });
}
