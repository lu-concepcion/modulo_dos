import {validarNumeros, operacionesMatematicas} from '../funciones.js';

let solicitarNum1 = prompt("ingrese primer numero");
solicitarNum1 = parseInt(solicitarNum1);

let solicitarNum2 = prompt("ingrese un segundo numero");
solicitarNum2 = parseInt(solicitarNum2);


do{
  
    var solicitarOperacion = prompt ("¿Que operacion necesita?\n1. Sumar\n2. Restar\n3. Multiplicar \n4. Dividir")

    }while(validarNumeros(solicitarOperacion)||solicitarOperacion<1&&solicitarOperacion>4)

     alert(operacionesMatematicas(solicitarOperacion, solicitarNum1, solicitarNum2))

