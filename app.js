// routes
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

// config
mongoose.connect('mongodb://localhost/nested_schemas');

var port = process.env.port || 8080;

// bodyparser stuff
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// routes
require('./routes')(app);

// server
app.listen(port);

console.log("Everything looking a-ok on port " + port);

exports = module.exports = app;
