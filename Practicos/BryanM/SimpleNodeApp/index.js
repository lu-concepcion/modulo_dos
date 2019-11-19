var funciones = require('./funciones')
var persona = require('./repo/persona')
const curso = require('./repo/curso.js')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json())

app.post('/persona/', function(request, response){
  const { body }  = request;
  persona.guardar(body);
  response.send(body)
});

//Agrega un cruso
app.post('/curso/', function(request, response){
  const { body } = request;
  curso.guardarCurso(body)
  response.send(body)
});

//Agrega una persona a un curso
app.post('/persona/:rut/curso/', function(request, response){
  const { rut } = request.params;
  const { body } = request
  curso.matricularPersona(rut, body)
  response.send(body);
});

//Devuelve a todos los cursos
app.get('/curso/',function(request, response){
  const { body } = request;
  response.send(curso.obtenerCursos()) 
});

//Devuelve los cursos de una alumno
app.get('/persona/:rut/cursos/', function(request, response){
  
});

//Devuelve un curso con sus respectivos alumnos
app.get('/curso/:codigo', function(request, response){
  const { codigo } = request.params;
  let cursos = curso.buscarCurso(codigo);
  response.send(cursos)
});

//Devuelve una persona
app.get('/persona/:rut', function(request, response){
  const { rut }  = request.params;
  let personas = persona.buscarPersona(rut);
  response.send(personas);
});

//Devuelve todas las personas
app.get('/persona/', function(request, response){
  const { body }  = request;
  response.send(persona.verPersonas());
});

//Elimina a una persona 
app.delete('/persona/:rut', function(request, response){
  const { rut } = request.params;
  response.send(persona.eliminar(rut));
});


app.listen(3000, function () {
  console.log('Simple node app for LU-CCP listening on port 3000!');
})