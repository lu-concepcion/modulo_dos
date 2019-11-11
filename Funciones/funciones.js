const sumar=(num1,num2) => {
    return num1+num2;
}

const restar = (num1,num2) => {
    return num1-num2;
}

const esUnNumero = (num) => {
    if (!isNaN(num)) 
        return alert("Es un número correcto!");
        else
        return alert("Lo siento no es numero!");
}

const esUnTexto = (text) => {
    if (isNaN(text))
    return alert("Correcto! es un texto");
    else
    return alert("Upsss! lo siento no es un texto ):");
}

const textoEnMayuscula = (text) => {
    if (text == "" || !isNaN(text))
    return alert("Solo se aceptan textos!");
    else
    return alert("Tu texto: " + text.toLowerCase());
}

const textoEnMinuscula = (text) => {
    if (text == "" || !isNaN(text))
    return alert("Solo se aceptan textos!");
    else
    return alert("Tu texto: " + text.toUpperCase());
}

export {
    sumar, restar, esUnNumero, esUnTexto, textoEnMayuscula, textoEnMinuscula
}