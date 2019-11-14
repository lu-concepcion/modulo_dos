var numerosPares = [];
var numerosIngresados = [];
var suma = 0;
var multiplic = 1;

for(var i=0; i<5; i++){
    numerosIngresados[i] = prompt("Ingrese un número par");
    if(numerosIngresados[i] % 2 != 0 || numerosIngresados [i]<0 || numerosIngresados[i]>20){
        numerosIngresados [i] = prompt("Por favor ingrese un número par");
      if (numerosIngresados [i] % 2== 0 && numerosIngresados [i] >0 && numerosIngresados [i]<21)
      {
         numerosPares[i]=numerosIngresados[i];
      }
    }
    numerosPares[i]=numerosIngresados[i];
}

var operacion = prompt("Ingrese que operación desea realizar (Sumar - Multiplicar)");
  if (operacion == "Sumar"){ 
    for (var j = 0; j<5; j++){
      suma = parseInt(suma)+ parseInt(numerosPares[j]);
    }alert(suma)
  } 
  
  if (operacion == "Multiplicar"){
    for (var j = 0; j<5; j++){
      multiplic = parseInt(multiplic) * parseInt(numerosPares[j]);
    }alert(multiplic)
 }
