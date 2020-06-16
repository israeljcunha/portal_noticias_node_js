
module.exports.form_add_noticia = function(application, request, response){
	response.render('admin/form_add_noticia', {error : {}, noticia : {} });
}


module.exports.salvar_noticias = function(application, request, response) {
	var new_data = request.body; 

	request.assert('title', 'Título é obrigatório.').notEmpty();
	request.assert('resumo', 'Resumo é obrigatório').notEmpty();
	request.assert('resumo', 'Resumo é obrigatório e deve conter entre 10 e 100').len(10, 100);
	request.assert('autor', 'Autor é obrigatório.').notEmpty();
	request.assert('data_noticia', 'Data é obrigatório.').notEmpty();
	request.assert('data_noticia', 'Data precisa estar no formato recomendado.').isDate({formart: 'YYYY-MM-DD'});
	request.assert('newspapaer', 'Noticia é obrigatório.').notEmpty();

	var error = request.validationErrors()

	if (error) {
		response.render('admin/form_add_noticia', 
			{ error : error, noticia : new_data }
		);
		return;
	}

	var conn = application.settings.dbConnection();
	var new_model = new application.app.models.NoticiasDAO(conn);

	new_model.saveNews(new_data, function(error, result){
		response.redirect('/news');
	});
}