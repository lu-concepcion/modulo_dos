var funciones = require('./funciones')
var persona = require('./repo/persona')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/curso', function(request, response){
  const { body } = request;
  persona.setCurso(body);
  response.send(body);
});

app.get('/curso/:codigo', function(request, response){
  const { codigo } = request.params;
  let curso = persona.getCursos(codigo);
  response.send(curso);
});

app.post('/persona/:run/curso', function(request, response){
  const { run } = request.params;
  const { body } = request;
  persona.añadirAlumnoACurso(run, body);
  response.send("Alumno agregado exitosamente");
});

app.get('/persona/:run/cursos', function(request, response){
  const { run } = request.params;
  let alumno = persona.encontrarAlumnoCurso(run)
  response.send(alumno);
});

app.post('/persona', function(request, response){
  const { body }  = request;
  persona.setPersona(body);
  response.send(body);
});

app.get('/persona/:run', function(request, response){
  const { run }  = request.params;
  let personas = persona.getPersona(run);
  response.send(personas);
});

//NO FUNCIONA ACTUALMENTE (ARROJA UN ERROR QUE forEach no es una funcion)
/*
app.get('/persona/eliminar/:run', function(request, response){
  const { run } = request.params;
  response.send(persona.delPersona(run));
});*/

app.listen(3000, function () {
  console.log('Simple node app for LU-CCP listening on port 3000!');
});