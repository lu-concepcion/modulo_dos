/*Escribir un algoritmo que identifique si una palabra es palíndromo.

Ejemplo: ANILINA

Utilizar Funciones*/
let r=true;
let primeraletra = palabra.charAt(i);
let ultimaletra =palabra.charAt(palabra.legth-1);
let espacio= "";
export const validarpalindromo=(palabra)=>{
    for(let i=0;i<=palabra.legth;i++){
              if(primeraletra==espacio){
                  i++;
              }
              if(ultimaletra==espacio){
                  palabra.legth-1;
              }
            if(primeraletra==ultimaletra){
                  return(r=true);
    }
    else{
        return(r=true);
    }
}
}
