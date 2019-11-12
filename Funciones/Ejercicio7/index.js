import{
    esNumero
}from '../funciones.js';

let rut = "";
let salir = false;
let caracteresPermitidos = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "-"];

do{ //Comprueba que el rut ingresado no tenga caracteres distintos a los del array
    rut = prompt("Ingrese su rut");
    for(let i=0; i<rut.length; i++){
        salir = false;

        for(let j=0; j<caracteresPermitidos.length; j++){
            if(rut.charAt(i) == caracteresPermitidos[j]){ //Encontró que existe dentro y sale
                salir = true;
                break;
            }
        }
        if(salir == false){ //Si sale del for y no encontró que existe ese caracter, pide rut nuevamente
            break;
        }
    }    
}while(salir != true);

salir = false;
let arrayRut = rut.split(".");

if(arrayRut.length == 3){ //[19][199][199-4]
    if( (arrayRut[0].length == 1 || arrayRut[0].length == 2) && esNumero(arrayRut[0]) ){ //[19]
        if(arrayRut[1].length == 3 && esNumero(arrayRut[1])){ // [199]
            if(arrayRut[2].length == 5 && !esNumero(arrayRut[2])){ //[199-4]
                
                let arrayRutGuion = arrayRut[2].split("-"); //[199][4]
                if(arrayRutGuion[0].length == 3){ //[199]
                    if(arrayRutGuion[1].length == 1){ //[199]
                        
                        //Rut correcto, comienza la lógica
                        salir = true;
                        
                    }
                }

            }else{
                salir = false;
            }
        }else{
            salir = false;
        }
    }else{
        salir = false;
    }
}else{//Más puntos de los que debería ej: 19.199.199.199-4 => [19][199][199][199-4]
    salir = false;
}

if(salir){
    alert("Funciona!")
}