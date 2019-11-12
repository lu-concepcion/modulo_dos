import { sumar, restar, multiplicar, dividir} from '../funciones.js'

let opcion = prompt("Ingrese una opción para realizar operaciones ariméticas:\n 0: Suma\n 1: Resta\n 2: Multiplicación\n 3: División");
let input = [];

switch(opcion)
{
    case "0":
        input[0] = prompt("Ingrese el primer número");
        input[1] = prompt("Ingrese el segundo número");
        alert("la suma de los dos números es:"+  sumar(input[0],input[1]))
        break;
    case "1":
        input[0] = prompt("Ingrese el primer número");
        input[1] = prompt("Ingrese el segundo número");
        alert("la resta de los dos números es:"+ restar(input[0],input[1]))
        break;
    case "2":
        input[0] = prompt("Ingrese el primer número");
        input[1] = prompt("Ingrese el segundo número");
        alert("la multiplicación de los dos números es:"+  multiplicar(input[0],input[1]))
        break;
    case "3":
        input[0] = prompt("Ingrese el primer número (Dividendo)");
        input[1] = prompt("Ingrese el segundo número (Divisor)");
        alert("la división de los dos números es:"+ dividir(input[0],input[1]))
        break;
}