module.exports.noticias = function(application, request, response){
	var conn = application.settings.dbConnection();
	var new_model = new application.app.models.NoticiasDAO(conn);

	new_model.getNews(function(error, result){
		response.render('noticias/noticias', { news : result });
	});
}

module.exports.noticia = function(application, request, response){
	var conn = application.settings.dbConnection();
	var new_model = new application.app.models.NoticiasDAO(conn);
	var id_noticia = request.query;

	new_model.getNew(id_noticia, function(error, result){
		response.render('noticias/noticia', { news : result });
	});
}