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
    if (!esNumero(numero2)) {
        alert('Ingresa solo números');
        continue;
    }
    break;
}

alert('Resultado: ' + calcularPorcentaje(numero1, numero2) + '%')