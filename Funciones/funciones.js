const esNumero = (variable)=>{
    return !isNaN(variable);
}

const esTexto = (variable)=>{
    return isNaN(variable);
}

const aMayuscula = (variable)=>{
    return variable.toUpperCase();
}

const aMinuscula = (variable)=>{
    return variable.toLowerCase();
}

const cuantasVocales = (cadena) =>{
    const palabra = aMinuscula(cadena);
    let contador = 0;
    
    for(let i=0; i<palabra.length; i++){
        if( esVocal(palabra.charAt(i)) ){
            contador++;
        }
    }
    return contador;
}

const esVocal = (letra) =>{
    const vocales = ["a", "e", "i", "o", "u"];

    for(let i=0; i<vocales.length; i++){
        if(letra == vocales[i]){
            return true;
        }
    }

    return false;
}

const esPalindromo = (cadena) =>{
    const palabra = aMinuscula(cadena);
    let j = (palabra.length-1);

    for(let i=0; i<palabra.length; i++){
        if(palabra.charAt(i) == " "){
            i++
        }
        if(palabra.charAt(j) == " "){
            j--
        }
        if(palabra.charAt(i) != palabra.charAt(j)){
            return false;
        }
        j--;
    }

    return true;
}

export{
    esPalindromo
}