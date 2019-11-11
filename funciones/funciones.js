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

const converTexto = (texto) => {
    if()
}


export {
    sumar, restar, verNumero
}