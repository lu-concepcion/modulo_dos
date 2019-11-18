const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {setPersona,getPersona,getAllPersona,updatePersona,deletePersona} = require('./repo/persona.js');

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

app.listen(3000, function () {
  console.log('Simple node app for LU-CCP listening on port 3000!');
});