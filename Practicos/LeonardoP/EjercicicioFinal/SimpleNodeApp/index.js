var funciones = require('./funciones');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json())

app.get('/persona/:id', function(request, response){
  response.send("hola mundo")
});

app.post('/persona', function(request, response){
  response.send("hola mundo")
});

app.listen(3000, function () {
  console.log('Simple node app for LU-CCP listening on port 3000!');
});