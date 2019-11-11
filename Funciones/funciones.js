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
    return text.toUpperCase();
}

const textoEnMinuscula = (text) => {
    if (text == "" || !isNaN(text))
    return false;
    else
    return text.toLowerCase();
}

const cuantasVocales = (text) => {
    let contador = 0;
        var textoString = textoEnMinuscula(text);
        for (var i = 0; i <= textoString.length;i++) 
        {
            if (esUnaVocal(textoString.charAt(i))) contador++;
        }
    return contador;
}

const esUnaVocal = (vocal) => {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    return (vocales.indexOf(vocal) !== -1) ? true : false;
}

const esPalindromo = (text) => {
    var text = textoEnMinuscula(text);
    text = text.replace(/ /g, "");
    for (var i = 0; i <text.length;i++) {
        if (text[i]!=text[text.length-i-1]) {
            return false;
        }
    }
    return true;
}

export {
    sumar, restar, esUnNumero, esUnTexto, textoEnMayuscula, textoEnMinuscula, cuantasVocales, esUnaVocal, esPalindromo
}