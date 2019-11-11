const sumar=(num1,num2) => {
    return num1+num2;
}

const restar = (num1,num2) => {
    return num1-num2;
}

const esUnNumero = (num) => {
    if (!isNaN(num)) 
        return true;
        else
        return false;
}

const esUnTexto = (text) => {
    if (isNaN(text))
    return true;
    else
    return false;
}

const textoEnMayuscula = (text) => {
    if (text == "" || !isNaN(text))
    return false;
    else
    return text.toLowerCase();
}

const textoEnMinuscula = (text) => {
    if (text == "" || !isNaN(text))
    return false;
    else
    return text.toUpperCase();
}

export {
    sumar, restar, esUnNumero, esUnTexto, textoEnMayuscula, textoEnMinuscula
}