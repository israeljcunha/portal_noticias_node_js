var mysql = require('mysql');


var connMySQL = function () {
	console.log('+ [nodemon] Connection MySQL');
	return mysql.createConnection({
		host:'127.0.0.1',
		user:'root',
		password:'Pass;123',
		database:'portal_noticias'
	});
}

module.exports = function(){
	console.log('+ [nodemon] Loading Connection MySQL');
	return connMySQL;
}
		