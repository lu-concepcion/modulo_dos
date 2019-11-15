<<<<<<< HEAD
// abrir carpeta sola, open terminal, npmi (instala paquetes), Debug, launch program, start -> local host puerto
//Postman: nueva c, GET localhost:3000/persona/1 (1-> :1 CON : lo que pide), send, POST, body, raw, { "id": 1 }
//(JSON) 

//endpoints o microservicios: app.post app.get
// metodos http



var funciones = require('./funciones')
=======
var funciones = require('./funciones')
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
>>>>>>> master
});

app.listen(3000, function () {
  console.log('Simple node app for LU-CCP listening on port 3000!');
});

     //v2
// var funciones = require('./funciones')
// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');

// app.use(bodyParser.json())

// app.post('/persona', function(request, response){
//   response.send({ "mensaje": "hola mundo"})
// });

// app.get('/persona/:id', function(request, response){
//   const { id } = request.params;
//   response.send({ "mensaje": `${id} hola`})
// });






      //V!
// var funciones=require('./funciones');
// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');

// app.use(bodyParser.json())

// app.get('/persona/:id', function(request, response){//funciones.

//   response.send("hola mundo")
// });

// app.post('/persona', function(request, response){
//   response.send("hola mundo")
// });

// app.listen(3000, function () {
//   console.log('Simple node app for LU-CCP listening on port 3000!');
// });