module.exports = function(application){
    var formulario_path = application.app.controllers.formulario;
    application.get('/formulario_incluir_contato', (req, res)=>{
        formulario_path.formulario_incluir(application, req, res);
    });

    application.get('/formulario_pesquisar_contato', (req, res)=>{
        formulario_path.formulario_pesquisar(application, req, res);
    });
}