//Escribir un algoritmo que indique, dado un número romano, este mismo en palabras, solo del 1 al 10, ej;
//input: X
//output: Diez
//Utilizar OBJETOS
var numero = {}
var numero = [
    { romano: "I",
      español: "uno"
     },
     { romano: "II",
         español:"dos"
        },
        { romano: "III",
         español:"tres"
        },
        { romano: "IV",
         español:"cuatro"
        },
        { romano: "V",
         español: "cinco"
        },
        { romano: "VI",
         español:"seis"
        },
        { romano: "VII",
         español:"siete"
        },
        { romano: "VIII",
         español:"ocho"
        },
        { romano:"IX", 
         español:"nueve"
        },
        { romano:"X",
         español:"diez"
        }
     ]          

    var respuesta= prompt("ingrese numero romano en mayúsculas: ")

 for (let i = 0; i < numero.length; i++) {
     if (numero[i].romano == respuesta )
     {  document.write(numero[i].español) }
     
 }


