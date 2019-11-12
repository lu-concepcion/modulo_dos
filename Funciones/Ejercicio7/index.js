import { verificarNumero, verificarSeparaciones } from './funciones.js';
let flag = 0;

do{
var pedirRUN = prompt ("Ingrese su rut, sin puntos ni el numero despues del guion");
if(verificarNumero(pedirRUN)){
    alert(verificarSeparaciones(pedirRUN));
}else{
    alert("Lo ingresado no es un numero")
}
}while(flag==0)
