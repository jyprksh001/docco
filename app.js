var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./app/config/config');
var mongoose = require('mongoose');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.use('/api',require('./app/routes/userRoute')() );

mongoose.connect(config.database, function(err) {
	if(err) {
		throw err
	}else if(config.port!=undefined && typeof config.port=="number") {	
			http.listen(config.port, function(err) {
				if(err) {
					console.log(err)
					throw err;
				} else {
					console.log("Database connected and Listening on port "+ config.port);
				}
		});
	}
});

