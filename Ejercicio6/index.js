// var nombre = [];
// var edad = []; 

//  for(var i = 0; i<4; i++)
//  {
//     nombre[i] = prompt("Ingrese su nombre");
//     edad[i] = prompt("Ingrese su edad");
//  }
 
//  var salir = prompt("Escriba Salir para finalizar");

//  if(salir == "Salir")

//     for(var j = 0; j<4; j++)
//     {
//         if (edad[j]<edad[j+1])

//             var salida = nombre[j+1];
//     }
//     alert(salida)
var numero = [];
var numeropar = [];
var uno = 1;
var suma = 0;
var multiplicacion = 0;

 for(var i = 0; i<5; i++)
 {
    numero[i] = prompt("Ingrese número par entre 0 y 20");
    if(numero [i] % 2!= 0 ||numero [i] <0 || numero [i]>20)
    {
      numero [i] = prompt("Número inválido, ingrese nuevamente");
      if (numero [i] % 2== 0 && numero [i] >0 && numero [i]<21)
      {
         numeropar[i] = numero[i];
      }
    }
      numeropar[i] = numero[i];
 }
for (var j = 0; j<5; j++)
{
   var pregunta = prompt("Ingrese S para sumar los números ingresados o M para multiplicarlos");
   if (pregunta == "S")
    {
       suma = parseInt(suma)+ parseInt(numeropar[j]);
      
    } 
    if (pregunta == "M")
    {
      multiplicacion = parseInt(uno) * parseInt(numeropar[j]);
      alert(multiplicacion)
    }
}alert(suma)