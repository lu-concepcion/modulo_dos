var funciones = require('./funciones')
var persona = require('./repo/persona')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json())

app.post('/persona', function(request, response){
  // body mapea a un objeto los parámetros enviados en el body del request
  // ej: localhost:3000/persona
  // body: {id: 1, nombre: hernan }
  // body = { id: 1, nombre: hernan }
  const { body }  = request;
  persona.reciboPersona(body);
  response.send(body);
});

app.get('/persona/:run', function(request, response){
  // query mapea a un objeto los parámetros enviados en la ruta
  // ej: localhost:3000/persona?id=1&nombre=Hernan
  // query = { id: 1, nombre: hernan }
  const { run }  = request.params;
  response.send(persona.buscarPersona(run));
  //response.send(persona.listarPersonas())
});

app.listen(3000, function () {
  console.log('Simple node app for LU-CCP listening on port 3000!');
});