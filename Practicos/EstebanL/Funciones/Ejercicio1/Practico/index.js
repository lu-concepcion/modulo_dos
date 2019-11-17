
import {texto, mayuscula, minuscula} from '../../funciones.js';


const textoingresado = prompt ("ingrese texto o numero a analizar")


if(texto(textoingresado)==true){

    const menu = prompt ("Ingrese una opcion a entregar en el texto: \
    1: Mayuscula, \
    2: Minuscula")

    switch(menu){

        case "1": {

            alert (mayuscula(textoingresado))
            alert ("Gracias por utilizar nuestros sistemas")
        break;
    }   case "2": {

            alert (minuscula(textoingresado))
            alert ("Gracias por utilizar nuestros sistemas")
        break;

    }   default:{

        alert ("Comando Desconocido")
        alert ("Gracias por utilizar nuestros sistemas")
        break;
    }
    }
}else{

    alert ("Gracias por utilizar nuestros sistemas")

}
    
    

