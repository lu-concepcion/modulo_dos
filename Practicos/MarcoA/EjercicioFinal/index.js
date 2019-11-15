var funciones = require('./funciones')
var persona = require('./repo/persona')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json())

app.post('/persona', function(request, response){
  let persona ={
    run: 0,
    dv: 0,
    fechaNacimiento: new Date(0, 0 , 0),
    edad: 0,
    tieneProfesion: false,
    tieneVehiculo: false,
    vehiculo: {
      marca: "",
      modelo: ""
    },
    profesion: {
      id: 0,
      profesion: "",
    }
  }
  //EN POSTMAN ENVIA UN OBJETO 
  const { body }  = request;

  response.send(body)
});

app.get('/persona/:id', function(request, response){
  const { id } = request.params;
  response.send({ "mensaje": `${id} hola`})

app.listen(3000, function () {
  console.log('Simple node app for LU-CCP listening on port 3000!');
});
});
