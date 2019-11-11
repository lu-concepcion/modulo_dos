import {texto,numero,mayuscula,minuscula } from './funciones.js'


let valor = prompt("ingrese un valor: ");

if(!numero(valor)){
    alert("Es numero")
}
    else{
        alert("No es numero")
    }

let valor2 = prompt("Ingrese un Texto: ");

if(texto(valor2)){
    alert("Es un texto");
    let p=prompt("Ingrese que opcion mayuscula o minuscula");
    if(p=="mayuscula"){
        alert(mayuscula(valor2));
    }
    if(p=="minuscula"){
        alert(minuscula(valor2));
    }
   

}else{
     alert("No es un Texto");

}


