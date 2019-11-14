var express = require('express');
var app = express();

app.get('/', function(request, response){
  response.send("hola mundo")
});

app.listen(3000, function () {
  console.log('Simple node app for LU-CCP listening on port 3000!');
});