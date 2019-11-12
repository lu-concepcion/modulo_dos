import { contar_vocales } from '../funciones';
var pedir_texto = prompt("Ingrese el texto para contar sus vocales");
if(isNaN(pedir_texto)){
alert(contar_vocales(pedir_texto));
}else{
    alert("No se ingreso un texto valido")
}