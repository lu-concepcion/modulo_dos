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
    return Math.round((num1*100)/num2) +"%";
}

const digitoVerificador = run => {
    var revertido=0,rutLimpio=run,digito=1;
    //Limpio los caracteres no necesarios
    rutLimpio = rutLimpio.replace(/[\. ,:-]+/g, "");
    //Compruebo si es válido
    if (run == "" || rutLimpio.length >= 9 || rutLimpio.length <= 6)
    return false
    else {
        //Creo un for con la function floor se detendra hasta llegar a cero
        for (;rutLimpio;rutLimpio=Math.floor(rutLimpio/10))
        digito=(digito+rutLimpio%10*(9-revertido++%6))%11;
        return digito?digito-1:'k'
    }
}

const buscarElemento = texto => {
    var array = ['fresa', 'cambur', 'manzana', 'pera', 'manzana', 'mango', 'uva'];
    return array.includes(textoEnMinuscula(texto))
}

const empezarLoto = (numeros) => {
    
}

export {
    sumar, 
    restar, 
    dividir,
    multiplicar,
    esUnNumero,
    esUnTexto,
    textoEnMayuscula,
    textoEnMinuscula,
    cuantasVocales,
    esUnaVocal,
    esPalindromo,
    empezarLoto, 
    digitoVerificador,
    porcentaje,
    buscarElemento
}