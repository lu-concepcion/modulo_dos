const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {setPersona,getPersona,getAllPersona,updatePersona,deletePersona, matriculaPersona} = require('./repo/persona.js');
const {setCurso, getCurso} = require('./repo/curso.js');

app.use(bodyParser.json());


// Métodos para personas
app.post('/persona', function(request, response){
  const { body }  = request;
  response.send(setPersona(body));
});

app.get('/persona/:run', function(request, response){
  const { run }  = request.params;
  let personas = getPersona(run);
  response.send(personas);
});

app.get('/persona/', function(request, response){
  const { run }  = request.params;
  let personas = getAllPersona();
  response.send(personas);
});

app.put('/persona/:run', (request, response) => {
  const { run }  = request.params;
  const { body } = request;
  updatePersona(run, body);
  response.send('successfully updated')
});

app.delete('/persona/:run', (request, response) => {
  const { run }  = request.params;
  deletePersona(run);
  response.send('successfully deleted')
});

// Métodos para cursos
app.post('/curso', function(request, response){
  const { body }  = request;
  response.send(setCurso(body));
});

app.get('/curso/:codigo', function(request, response){
  const { codigo }  = request.params;
  let curso = getCurso(codigo);
  response.send(curso);
});

app.post('/persona/:run/curso', function(request, response){
  const { body }  = request;
  const { run }  = request.params;
  response.send(matriculaPersona(body, run));
});


app.listen(3000, function () {
  console.log('Simple node app for LU-CCP listening on port 3000!');
});