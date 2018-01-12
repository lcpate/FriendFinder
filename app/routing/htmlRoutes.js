//required dependencies
var path = require("path");
// var express = require("express");
// var router = express.Router();

module.exports = function (app) {
//directing to home page
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});
//directing to survey page
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});

};
