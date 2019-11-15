// abrir carpeta sola, open terminal, npmi (instala paquetes), Debug, launch program, start -> local host puerto
//Postman: nueva c, GET localhost:3000/persona/1 (1-> :1 CON : lo que pide), send, POST, body, raw, { "id": 1 }
//(JSON) 

//endpoints o microservicios: app.post app.get
// metodos http



var funciones = require('./funciones')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json())

app.post('/persona', function(request, response){
  response.send({ "mensaje": "hola mundo"})
});

app.get('/persona/:id', function(request, response){
  const { id } = request.params;
  response.send({ "mensaje": `${id} hola`})
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