import { esNumero, calcular, calcularPorcentaje} from "../funciones.js";

let numero1 = 0;
let numero2 = 0;


while(true) {
    numero1 = parseInt(prompt ('Ingrese número 1'));
    if (!esNumero(numero1)) {
        alert('Ingresa solo números');
        continue;
    }
    numero2 = parseInt(prompt ('Ingrese número 2'));
    if (!esNumero(numero2) || numero2 <= 0) {
        alert('Ingresa solo números positivos mayores a 0');
        continue;
    }
    break;
}

alert('Resultado: ' + calcularPorcentaje(numero1, numero2) + '%')