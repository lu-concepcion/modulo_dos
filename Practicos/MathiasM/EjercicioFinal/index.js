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
  persona.guardarPersona(body);
  response.send(body)
});

app.post('/cursos', function(request, response){
  const { body }  = request;
  cursos.guardarCurso(body);
  response.send(body)
});
app.post('/persona/:run/cursos', function(request, response){
  const { run }  = request.params;
  const {body} = request;
  response.send(persona.matriculaCurso(run,body))
});

app.get('/cursos/:codigo', function(request, response){
  const { codigo } = request.params;
  
  response.send(cursos.filtarPorCodigo(codigo))
});

app.get('/persona', function(request, response){
  // query mapea a un objeto los parámetros enviados en la ruta
  // ej: localhost:3000/persona?id=1&nombre=Hernan
  // query = { id: 1, nombre: hernan }
  const { query }  = request;
  persona.filtarPorRun(query)
  response.send("hola mundo")
});

app.listen(3000, function () {
  console.log('Simple node app for LU-CCP listening on port 3000!');
});