var funciones = require('./funciones')
<<<<<<< HEAD
=======
var persona = require('./repo/persona')
>>>>>>> master
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json())

app.post('/persona', function(request, response){
<<<<<<< HEAD
  response.send({ "mensaje": "hola mundo"})
});

app.get('/persona/:id', function(request, response){
  const { id } = request.params;
  response.send({ "mensaje": `${id} hola`})
});

app.listen(3000, function () {
  console.log("Funciona..");
})

=======
  // body mapea a un objeto los parámetros enviados en el body del request
  // ej: localhost:3000/persona
  // body: {id: 1, nombre: hernan }
  // body = { id: 1, nombre: hernan }
  const { body }  = request;

  response.send(body)
});

app.get('/persona', function(request, response){
  // query mapea a un objeto los parámetros enviados en la ruta
  // ej: localhost:3000/persona?id=1&nombre=Hernan
  // query = { id: 1, nombre: hernan }
  const { query }  = request;
  response.send("hola mundo")
});

app.listen(3000, function () {
  console.log('Simple node app for LU-CCP listening on port 3000!');
});
>>>>>>> master
