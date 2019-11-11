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


export {
    sumar, restar, verNumero, converTextoMinus, converTextoMayus
}