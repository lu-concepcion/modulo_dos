var funciones = require('./funciones')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json())

app.post('/persona', function(request, response){
  const body = request.body.id;
  response.send({ "mensaje": "hola mundo"})
});

app.get('/persona/:id', function(request, response){
  const { id } = request.params;
  response.send({ "mensaje": `${id} hola`})
});

app.listen(3000, function () {
  console.log('Simple node app for LU-CCP listening on port 3000!');
});