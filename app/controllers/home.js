
module.exports.index = function (application, request, response){
    var conn = application.settings.dbConnection();
    var newsModel = new application.app.models.NoticiasDAO(conn);

    newsModel.getLastFiveNews(function (error, result) {
        response.render('home/index', { noticia : result });
    });
}