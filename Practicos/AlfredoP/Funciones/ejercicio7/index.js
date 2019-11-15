import { digitoVerificador } from '../funciones.js';
do {
    var pasa = false;
    var rut = prompt("Ingresa tu rut: ");
    if (!digitoVerificador(rut))
    alert ("Upsss, lo siento debes ingresar correctamente tu rut!");
    else
    var pasa = true;
}while(!pasa);

alert("El digito verificador es: "+digitoVerificador(rut));