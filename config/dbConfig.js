const dadosDoAdmin = {
    host: "localhost",
    user: "root",
    //port: process.env.port || 8080, //porque quando ponho isso não funciona o READ?
    password: "12345678",
    database: "blog"
}

var mysql = require('mysql');

var _conexao = function(){
    return mysql.createConnection(dadosDoAdmin);
}

module.exports = function(){
    return _conexao;
}
