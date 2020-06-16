module.exports = function (application) {
	application.get('/add_news', function(request, response) {
		application.app.controllers.admin.form_add_noticia(application, request, response)
	});

	application.post('/news/save', function(request, response) {
		application.app.controllers.admin.salvar_noticias(application, request, response)
	})
};