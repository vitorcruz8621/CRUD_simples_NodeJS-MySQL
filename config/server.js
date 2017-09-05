var application = require('express')();
var consign = require('consign');
var bodyParser = require('body-parser');

application.set('view engine', 'ejs');
application.set('views', './app/views');

application.use( bodyParser.urlencoded ( { extended: true } ) );

consign()
        .include('app/controllers')
        .then('app/models')
        .then('app/routes')
        .then('config/dbConfig.js')
        .into(application);
//em vez de 'then("app...")', tentar 'then("./app...")'

/* module.exports = function(){
    return application;
} */
module.exports = application;