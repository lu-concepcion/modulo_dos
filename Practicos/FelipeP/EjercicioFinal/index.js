var funciones = require('./funciones')
var persona = require('./repo/persona')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/persona', function(request, response){
  const { body }  = request;
  const {run,fechaNac,tieneProfesion,tieneVehiculo,vehiculoId,profesionId} = request.body;

  let dv = funciones.generaDigitoVerificador(run);

  // rut,digito,fechaNacimiento,edad_persona,tieneVehiculo,tieneProfesion,marca_vehiculo,modelo_vehiculo,id_profesion,nombre_profesion
  persona.setPersona(run,dv,fechaNac,100,tieneVehiculo,tieneProfesion,'Mazda','Mazda 3',profesionId,'Ing Informática')
  response.send(body);
});

app.get('/persona', function(request, response){
  let personas = persona.getPersona();
  const { query }  = request;
  response.send(personas);
});

app.listen(3000, function () {
  console.log('Simple node app for LU-CCP listening on port 3000!');
});