/*Escribir un algoritmo que identifique si una palabra es palíndromo.

Ejemplo: ANILINA

Utilizar Funciones*/
let r=true;
export const validarpalindromo=(palabra)=>{
    for(let i=0;i<=palabra.legth;i++){
        if(palabra[i]==palabra[palabra.legth-1]){
            return(r=true);
    }else{
            return(r=false);

    }
}
}
