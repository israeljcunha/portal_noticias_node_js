function NoticiasDAO(connection){
	this._connection = connection;
}

NoticiasDAO.prototype.getNews = function(callback){
	this._connection.query('select * from news order by creation desc', callback);
};

NoticiasDAO.prototype.getNew = function(id_noticia, callback){
	this._connection.query('select * from news where id_news = ' + id_noticia.id_noticia, callback);
};

NoticiasDAO.prototype.saveNews = function(news_data, callback) {
	this._connection.query('insert into news set ? ', news_data, callback);
}

NoticiasDAO.prototype.getLastFiveNews = function (callback) {
	this._connection.query('select * from news order by creation desc limit 5 ', callback);
}

module.exports = function () {
	return NoticiasDAO;
}