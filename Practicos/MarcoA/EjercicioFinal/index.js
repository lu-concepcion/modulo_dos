var persona = require('./repo/persona')
var funciones = require('./funciones')
var persona = require('./repo/persona')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json())

app.post('/persona', function(request, response){
  const { body }  = request;
  persona.guardarPersona(body);
  response.send("Persona bien implementada")
});

app.get('/persona/:run', function(request, response){
  const { run } = request.params;
  response.send(persona.obtenerPersonas(run))
});

app.listen(3000, function () {
  console.log('Simple node app for LU-CCP listening on port 3000!');
});
