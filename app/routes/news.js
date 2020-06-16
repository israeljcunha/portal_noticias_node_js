module.exports = function(application) {

	application.get('/news', function(requiest, response) {
		application.app.controllers.noticias.noticias(application, requiest, response);
	});

	application.get('/new', function(requiest, response) {
		application.app.controllers.noticias.noticia(application, requiest, response);
	});

};