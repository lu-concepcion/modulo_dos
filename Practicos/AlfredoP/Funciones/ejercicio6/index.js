import {esUnNumero} from '../funciones.js';
var contador = 0;
let numeros = [];

do {
    var ingresaNumero = prompt("Ingresa un número para tu cartola: ");
    if (esUnNumero(ingresaNumero) && parseInt(ingresaNumero) <= 36) {
        if (numeros.indexOf(ingresaNumero) !== -1) {
            contador++;
            numeros.push(ingresaNumero);
        }
        else {
            alert ("Upsss! Lo siento no ingresastes un número válido o ya esta ingresado el número!");
        }
    }
}while(contador < 6);

if (confirm("Deseas empezar el sorteo?")) {
    empezarLoto(numeros);
}
else {
    alert("Cambiar numeros!");
}

let numeros=[], numerosAleatorios=[], numeroAleatorio=0, contador=0, numeroUsuario=0;