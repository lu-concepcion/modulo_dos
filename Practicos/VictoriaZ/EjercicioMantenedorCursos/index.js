var funciones = require('./funciones')
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
  cursos.guardarPersona(body);
  response.send("Se guardo exitosamente")

});

app.post('/curso', function(request, response){
  // body mapea a un objeto los parámetros enviados en el body del request
  // ej: localhost:3000/persona
  // body: {id: 1, nombre: hernan }
  // body = { id: 1, nombre: hernan }
  const { body }  = request;
  cursos.guardarCurso(body);
  response.send("Se guardo exitosamente")

});

app.post('/persona/:run/curso', function(request, response){
  // body mapea a un objeto los parámetros enviados en el body del request
  // ej: localhost:3000/persona
  // body: {id: 1, nombre: hernan }
  // body = { id: 1, nombre: hernan }
  const { body }  = request;
  const {run}= request.params;
  cursos.matricularPersona(body, run);
  response.send("Se guardo exitosamente")
});

app.get('/persona/:run/curso', function(request, response){
  // query mapea a un objeto los parámetros enviados en la ruta
  // ej: localhost:3000/persona?id=1&nombre=Hernan
  // query = { id: 1, nombre: hernan }
  const { run }  = request.params;
  response.send(cursos.obtenerCursosPersona(run))
});


app.get('/curso/:codigo', function(request, response){
  // query mapea a un objeto los parámetros enviados en la ruta
  // ej: localhost:3000/persona?id=1&nombre=Hernan
  // query = { id: 1, nombre: hernan }
  const { codigo }  = request.params;
  response.send(cursos.obtenerInfoCurso(codigo))
});

app.listen(3000, function () {
  console.log('Simple node app for LU-CCP listening on port 3000!');
});