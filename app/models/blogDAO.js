function BlogDAO(_connection){
    this._connection = _connection;
}

BlogDAO.prototype.index = function(callback){
    this._connection.query('select * from contact order by id LIMIT 5', callback);
}

BlogDAO.prototype.create = function(dados, callback){
    this._connection.query('insert into contact set ?', dados, callback);
}

BlogDAO.prototype.read = function(/* err, */ callback){
    //if (err) throw err;
    this._connection.query('select * from contact', callback);
}

BlogDAO.prototype.readUmRegistro = function(blog_id, callback){
    //if (err) throw err;
    this._connection.query('select * from contact quere id = ?', blog_id, callback);
}

BlogDAO.prototype.update = function(callback){
    //this._connection.query('select * from contact order by id');
}

BlogDAO.prototype.deleteUmRegistro = function(blog_id, callback){
    this._connection.query('delete from contact where id = ?', blog_id, callback);
}

module.exports = function (){
    return BlogDAO;
}