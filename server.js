var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/model'),
  routes = require('./api/routes/routes'),
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app); 

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/27017'); 

app.listen(port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

  console.log('RESTful API server "mongoDBControlAPI" started on port: ' + port);
