var funciones = require('./funciones')
var persona = require('./repo/persona')
var cursos = require('./repo/cursos')
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
  //persona.prueba
  //const {run, fechaNac, tieneProfesion, tieneVehiculo, vehiculoId, profesionId}=body
  persona.guardarPersona(body);
  response.send(body)

});

app.post('/cursos', function(request, response){
  const { body }  = request;
  cursos.guardarCurso(body);
  response.send(body)

});

app.post('/persona/:run/cursos', function(request, response){
  const { body, params: { run } }  = request;
  cursos.matricular(body, run);
  response.send(body)

});

app.get('/cursos/:codigo', function(request, response){
  // query mapea a un objeto los parámetros enviados en la ruta
  // ej: localhost:3000/persona?id=1&nombre=Hernan
  // query = { id: 1, nombre: hernan }
  const { codigo }  = request.params;
  response.send(cursos.obtenerCursos(codigo))
});

app.listen(3000, function () {
  console.log('Simple node app for LU-CCP listening on port 3000!');
});
