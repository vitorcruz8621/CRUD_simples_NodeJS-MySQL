module.exports = function(application){
    var crud_path = application.app.controllers.crud;
    
    application.post('/create', (req, res)=>{
        crud_path.create(application, req, res);
    });

    application.get('/read', (req, res)=>{
        crud_path.read(application, req, res);
    });

    application.get('/read/:id', (req, res)=>{
        crud_path.readUmRegistro(application, req, res);
    });

    application.get('/update', (req, res)=>{
        crud_path.index(application, req, res);
    });

    application.get('/delete/:id', (req, res)=>{
        crud_path.deleteUmRegistro(application, req, res);
    });
}
