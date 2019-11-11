import { validar_texto, transformar_mayuscula, transformar_minuscula, validar_numero } from './funciones.js';
var texto = prompt("Ingrese un texto")
if(validar_texto(texto)){
    var opcion_texto = prompt ("Que desea hacer con su texto \n1.- Mayuscula \n2.- Minuscula \n3.- Nada");
    if(opcion_texto==1){
        alert(transformar_mayuscula(texto))
    }else{
        if(opcion_texto==2){
            alert(transformar_minuscula(texto))
        }else{
            alert(":(")
        }
    }
}else{
    alert("Lo ingresado no es un texto")
}
var numero = prompt("Ingrese un numero")
if(!validar_numero(numero)){
    alert("Ingresaste un numero valido")
}else{
    alert("Ingresaste un numero invalido")
}