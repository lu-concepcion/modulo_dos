var funciones = require('./funciones')
var persona = require('./repo/persona')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/persona', function(request, response){
  const { body }  = request;
  persona.setPersona(body)
  response.send(body);
});

app.get('/persona/:run', function(request, response){
  const { run }  = request.params;
  let personas = persona.getPersona(run);
  response.send(personas);
});

app.get('/persona/delete/:run'), function(request, response){
  const { run } = request.params;
  let personas = persona.delPersona(run);
  response.send("Rut eliminado")
}

app.listen(3000, function () {
  console.log('Simple node app for LU-CCP listening on port 3000!');
});