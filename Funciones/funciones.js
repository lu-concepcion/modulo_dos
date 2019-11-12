const sumar=(num1,num2) => {
    return parseInt(num1)+parseInt(num2);
}

const restar = (num1,num2) => {
    return (num1-num2);
}

const multiplicar = (num1,num2) => {
    return (num1*num2);
}

const dividir = (num1,num2) => {
    return (num1/num2);
}

const esUnNumero = (num) => {
    return (!isNaN(num)) ? true : false;
}

const esUnTexto = (text) => {
    return (isNaN(text)) ? true : false;
}

const textoEnMayuscula = (text) => {
    return (text == "" || !isNaN(text)) ? false : text.toUpperCase();
}

const textoEnMinuscula = (text) => {
    return (text == "" || !isNaN(text)) ? false : text.toLowerCase();
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
        if (text[i]!=text[text.length-i-1]) return false;
    }
    return true;
}

const porcentaje = (num1,num2) => {
    return (num1*100)/num2 +"%";
}

const empezarLoto = (numeros) => {
    
}

export {
    sumar, restar, dividir, multiplicar, esUnNumero, esUnTexto, textoEnMayuscula, textoEnMinuscula, cuantasVocales, esUnaVocal, esPalindromo, empezarLoto, porcentaje
}