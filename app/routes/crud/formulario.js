module.exports = function(application){
    application.get('/formulario_incluir_contato', (req, res)=>{
        application.app.controllers.formulario.formulario(application, req, res);
    });
}