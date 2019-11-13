import { buscarEnArray } from '../funciones.js'

let array = [1,"Dos",3,"Cuatro",5,"Seis",7,"Ocho"]

let aux = false;



do{
    let resp = prompt("Ingrese opción: \n  1.Buscar elemento dentro de un array \n  2.Buscar elemento en array ");

    switch(resp){
        case "1":
            const elemt = prompt("Ingrese elemento a buscar");

            if(buscarEnArray(array, parseInt(elemt))){
                alert("Se encontro el elemento");
            }else {
                alert("No se encontro el elemento");
            }
            break;
        case "2":
            alert("Hola")
        default:
            alert("Ingrese opcion valida")
            aux = true;
    
    }
}while(aux)


