import { random,validMinMax, iqualNumber } from '../funciones.js'
let i = 0;
let input = []



while(i<6)
{   input[i] = prompt ("Ingrese un número entre 1 y 41");
   if(input [i]<"1" || input[i]>"41") 
   {
       input[i] = validMinMax(input[i], "1", "41");
   }
    i++;
}

let iqual = random()

alert("estos son los numeros ganadores:" + iqual+"\n Usted escogió los siguientes números:"+input)
alert("sus aciertos fueron:"+iqualNumber(iqual,input))
