import {limpiarRut, invertirCadena,calcularDigitoVerificador} from '../funciones.js';

let rut;
do {
     rut =prompt("Ingrese rut");  
     rut = limpiarRut(rut);  
} while (rut.length> 8 || rut.length<7);



alert(`Rut Ingresado: ${rut}\nDigito Verificador: ${calcularDigitoVerificador(rut)}`);

