var funciones = require('./funciones')
var persona = require('./repo/persona')
var vehiculos = require('./repo/vehiculos')
var profesiones = require('./repo/profesiones')
var curso = require('./repo/curso')
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
  if(curso.objectPositionFinder(persona.personas,"run",body.run)=="no encontrado"){
  body.dv=funciones.digitoVerificador(body.run)
  body.edad=funciones.calculoEdad(funciones.getBirthday(body.fechaNac))
  if (body.tieneVehiculo=="false")
  {
    body.vehiculoId=0
  } 
  body.vehiculo=funciones.objectFinder(vehiculos.listaVehiculos,"id",body.vehiculoId)
  body.profesion=funciones.objectFinder(profesiones.listaProfesiones,"id",body.profesionId)
  delete body.tieneProfesion
  delete body.tieneVehiculo
  delete body.vehiculoId
  delete body.profesionId
  delete body.vehiculo.id
  delete body.profesion.id
  persona.guardarPersonas(body)
  response.send(body)}
  else 
  {
    response.send("persona ya existe")
  }
});
app.post('/curso', function(request, response){
  const { body }  = request;
  if (curso.objectPositionFinder(curso.cursos,"codigoCurso",body.codigoCurso)=="no encontrado"){
  if (curso.objectPositionFinder(curso.cursos,"nombre",body.nombre)=="no encontrado") 
  {curso.guardarCurso(body);
  response.send(body)}
  else {
    response.send("el curso ingresado ya posee otro codigo")
  }
  }
  else{
    response.send("codigo del curso ya existe")
  }
});
app.post('/persona/:run/curso', function(request, response){
  const { body }  = request;
  const { run }  = request.params;
  const aux = funciones.objectFinder(curso.cursos,"codigoCurso",body.codigoCurso)
  if (curso.objectPositionFinder(aux.alumnos,"run",run)=="no encontrado"){
  curso.matricularPersonas(body,run);
  console.log (body)
  response.send(body)}
  else{
    response.send("persona ya matriculada")
  }
});

app.get('/persona/:run', function(request, response){
  // query mapea a un objeto los parámetros enviados en la ruta
  // ej: localhost:3000/persona?id=1&nombre=Hernan
  // query = { id: 1, nombre: hernan }
  const { run }  = request.params;
  response.send(persona.obtenerPersonas(run))
});
app.get('/curso/:codigoCurso', function(request, response){
  const { codigoCurso }  = request.params;
  response.send(curso.obtenerCurso(codigoCurso))
});
app.get('/persona/:run/curso', function(request, response){
  const { codigoCurso }  = request.params;
  response.send(curso.obtenerCurso(codigoCurso))
});

app.listen(3000, function () {
  console.log('Simple node app for LU-CCP listening on port 3000!');
});