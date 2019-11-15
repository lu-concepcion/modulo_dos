import { esUnNumero, factorialDeUnNumero} from '../funciones.js';

do {
    var paso = false;
    var numero = prompt("Ingresa un número:");
    if (numero == "" || !esUnNumero(numero))
    alert ("Por favor ingresa un número válido!");
    else
    var paso = true;
}while(!paso);

alert("Tu número factoria es: "+factorialDeUnNumero(numero));