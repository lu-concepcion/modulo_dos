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
 var pregunta = prompt("Ingrese S para sumar los números ingresados o M para multiplicarlos");
 if (pregunta == "S")
  { for (var j = 0; j<5; j++)
    {
     suma = parseInt(suma)+ parseInt(numeropar[j]);
    }alert(suma)
  } 

  
 if (pregunta == "M")
  {
     for (var j = 0; j<5; j++)
    {
    multiplicacion = parseInt(multiplicacion) * parseInt(numeropar[j]);
    
    }alert(multiplicacion)
 }
