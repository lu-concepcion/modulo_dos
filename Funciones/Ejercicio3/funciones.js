/*Escribir un algoritmo que identifique si una palabra es palíndromo.

Ejemplo: ANILINA

Utilizar Funciones*/

let primeraletra = palabra.charAt(i);
let ultimaletra =palabra.charAt(palabra.legth-1);
let espacio= "";
let nuevapalabra;
export const validarpalindromo=(palabra)=>{
    for(let i=0;i<=palabra.legth;i++){
            if(primeraletra==ultimaletra){
                  nuevapalabra=ultimaletra;
            }
        return(nuevapalabra);
    }
}

