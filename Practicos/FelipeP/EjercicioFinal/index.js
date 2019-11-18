const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {setPersona,getPersona,getAllPersona,updatePersona,deletePersona} = require('./repo/persona.js');

app.use(bodyParser.json());

app.post('/persona', function(request, response){
  const { body }  = request;
  setPersona(body);
  response.send('successfully added');
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

app.listen(3000, function () {
  console.log('Simple node app for LU-CCP listening on port 3000!');
});