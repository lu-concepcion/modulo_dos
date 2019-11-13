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

const buscarEnArray = (arrayDondeBuscara, propiedadAFiltrar, valorPropiedad) => {
    var objeto = {};
    for (let item in arrayDondeBuscara) 
        if (arrayDondeBuscara[item][propiedadAFiltrar] == textoEnMinuscula(valorPropiedad))  var objeto = arrayDondeBuscara[item];    
    return objeto;
}

const filtrarEnArray = (arrayDondeFiltrara, propiedadAFiltrar, valorPropiedad) => {
    var array = [];
    for (let item in arrayDondeFiltrara) 
        if (arrayDondeFiltrara[item][propiedadAFiltrar] == textoEnMinuscula(valorPropiedad))  array.push(arrayDondeFiltrara[item]);    
    return array;
}
const ordenarArray = arrayQueOrdeno => {
    let cantidad = arrayQueOrdeno.length;
    for (let pasar = 1; pasar < cantidad; pasar++) {
        for (let derecha = 0; derecha < (cantidad - pasar); derecha++) {
            let izquierda = derecha + 1;
            if( arrayQueOrdeno[derecha] > arrayQueOrdeno[izquierda]) {
            let valor = arrayQueOrdeno[derecha];
            arrayQueOrdeno[derecha] = arrayQueOrdeno[izquierda];
            arrayQueOrdeno[izquierda] = valor;
            }
        }
    }
    return arrayQueOrdeno;
}

const revertir = string => {
    let cantidad = string.length;
    for (let total = 0; total < cantidad; total++) {
        for (let derecha = 0; derecha < (cantidad - total); derecha++) {
            let izquierda = derecha-1;
            let valor = string[derecha];
            string[derecha] = string[izquierda];
            string[izquierda] = valor;
        }
    }
    return string;
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
    buscarElemento,
    buscarEnArray,
    filtrarEnArray,
    ordenarArray,
    revertir
}