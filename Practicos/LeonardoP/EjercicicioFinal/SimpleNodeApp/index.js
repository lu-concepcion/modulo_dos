var funciones = require('./funciones')
var cursos=require('./repo/cursos')
var persona = require('./repo/persona')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json())

app.post('/persona', function(request, response){ //personas
  
  const { body }  = request;

  persona.guardaPersonas(body); //metodo para guardar los datos que llegan del body

  response.send(body)
});


app.post('/cursos', function(request, response){ //cursos post
  
  const { body }  = request;

  cursos.crearCurso(body); //metodo para guardar los datos que llegan del body

  response.send(body)
});

app.post('/persona/:run/cursos', function(request, response){ //matricular personas
  
  const { body } = request;
  const {run}=request.params;


  persona.matriculaPersona(body,run)


  

  response.send(body)
});

app.get('/persona/:run', function(request, response){ //personas
  
  const { run }  = request.params;
  response.send(persona.retornaPersonas(run))
});


app.get('/cursos/:codigoCurso', function(request, response){ //cursos get
  
  const { codigoCurso}  = request.params;
  response.send(cursos.infoCurso(codigoCurso))
});

app.listen(3000, function () {
  console.log('Simple node app for LU-CCP listening on port 3000!');
});