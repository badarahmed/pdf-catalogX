
/**
 * Module dependencies.
 */

var express = require('express')
  , hbs = require('express3-handlebars')
  , routes = require('./routes')
  , search = require('./routes/search')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 80);
  app.set('views', __dirname + '/views');
  app.engine('handlebars', hbs({defaultLayout: 'main'}));
  app.set('view engine', 'handlebars');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// Mongo DB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pdfcatalogx');

var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () { 

  var Reference = require('./dbx/ReferenceModel.js');

});

// Routes
app.get('/', routes.index);
app.get('/search', routes.index);
app.get('/search/:text', search.search);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
