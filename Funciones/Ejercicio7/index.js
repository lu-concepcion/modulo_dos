import { verificarRUN } from './funciones.js';
let flag = 0;

do{
var pedirRUN = prompt ("Ingrese su rut, sin puntos ni el numero despues del guion");
if(verificarRUN(pedirRUN)){
    alert("RUT CORRECTO")
}else{
    alert("RUT ingresado de manera incorrecta")
}
}while(flag==0)
