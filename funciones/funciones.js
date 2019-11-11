const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}

const verNumero = (numero) => {
    if(isNaN(numero) == false){
        return "Valor ingresado es un numero";
    }
    else{
        return "Valor ingresado es un texto";
    }
}

const converTextoMinus = (texto) => {
    if(isNaN(texto)){
        return texto.toLowerCase()
    }
    else{
        return "El valor ingresado no se puede convertir a minusculas"
    }
}

const converTextoMayus = (texto) => {
    if(isNaN(texto)){
        return texto.toUpperCase()
    }
    else{
        return "El valor ingresado no se puede convertir a mayusculas"
    }
}

const contarVocales = (texto) => {
    converTextoMinus(texto);
    let contador = 0;
    if(isNaN(texto)){
        for(let i=0; i < texto.length ; i++){
            if(texto.charAt(i) == "a" || texto.charAt(i) == "e" || texto.charAt(i) == "i" || texto.charAt(i) == "o" || texto.charAt(i) =="u"){
                contador ++;
            }
        }
        return "Cantidad de vocales es: " + contador;
    }
    else{
        return "El valor ingresado no es un texto";
    }
}


export {
    sumar, restar, verNumero, converTextoMinus, converTextoMayus, contarVocales
}