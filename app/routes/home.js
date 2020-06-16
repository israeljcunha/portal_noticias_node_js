module.exports = function (application) {
	application.get('/', function(request, response) {
		application.app.controllers.home.index(application, request, response);
	})
};