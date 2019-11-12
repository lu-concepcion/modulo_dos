import {limpiarRut, invertirCadena,calcularDigitoVerificador} from '../funciones.js';

const rut =prompt("Ingrese rut");

alert(`Digito Verificador: ${calcularDigitoVerificador(limpiarRut(rut))}`);



