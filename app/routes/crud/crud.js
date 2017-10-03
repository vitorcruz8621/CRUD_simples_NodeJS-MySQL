module.exports = function(application){
    const crud_path = application.app.controllers.crud;
    
    application.post('/create', (req, res)=>{
        crud_path.create(application, req, res);
    });

    application.get('/read', (req, res)=>{
        crud_path.read(application, req, res);
    });

    application.get('/read/umregistro', (req, res)=>{
        crud_path.readUmRegistro(application, req, res);
    });

    application.get('/update/:id&:name&:email&:phone', (req, res)=>{
        crud_path.update(application, req, res);
    });

    application.post('/update_salvar', (req, res)=>{
        crud_path.update_salvar(application, req, res);
    });

    application.get('/delete/:id', (req, res)=>{
        crud_path.deleteUmRegistro(application, req, res);
    });
}
