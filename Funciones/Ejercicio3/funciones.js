/*Escribir un algoritmo que identifique si una palabra es palíndromo.

Ejemplo: ANILINA

Utilizar Funciones*/



//let espacio= "";

export const validarpalindromo=(palabra)=>{
    let nuevapalabra;
    let primeraletra = palabra.charAt(i);
    let ultimaletra =palabra.charAt(palabra.legth-1);
    for(let i=0;i<=palabra.legth;i++){
            if(primeraletra==ultimaletra){
                  nuevapalabra=ultimaletra;
                  document.write(+nuevapalabra+"");
            }
        }
        return(nuevapalabra);
    
}

