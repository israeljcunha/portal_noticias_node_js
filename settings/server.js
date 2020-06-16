var express = require('express');
var consign = require('consign');
var body_parser = require('body-parser');
var express_validator = require('express-validator')

var app = express();

// Engines
app.set('view engine', 'ejs');
app.set('views', './app/views');


// Middlewares
app.use(express.static('./app/static'))
app.use(body_parser.urlencoded({extended: true}));
app.use(express_validator());


// Routes 
consign()
	.include('app/routes')
	.then('settings/dbConnection.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);

module.exports = app