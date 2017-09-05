var application = require('./config/server');
const porta = 8080;

application.listen(porta, function (err){
    if(err) throw err;
    console.log("Servidor ON na porta --> " + porta);
});