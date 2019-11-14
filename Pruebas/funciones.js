const sumar = (Num1, Num2) => {
    return parseInt(Num1) + parseInt(Num2);
}
const restar = (Num1, Num2) => {
    return parseInt(Num1) - parseInt(Num2);
}
const multiplicar = (Num1, Num2) => {
    return parseInt(Num1) * parseInt(Num2);
}
const dividir = (Num1, Num2) => {
    return parseInt(Num1) / parseInt(Num2);
}
const porcentajes = (Num1, Num2) => {
    let resultados;
    resultados = parseInt(Num2) * parseInt(100);
    resultados = parseInt(resultados) / parseInt(Num1);
    return parseInt(resultados);
}
const validaNumero = (string1) => {
    if (parseInt(string1)) return "Si";
    else return "No";
}
const validaTexto = (string1) => {
    if (isNaN(string1)) return "Si";
    else return "No";
}
const aMayusculas = (string1) => {
    let resultado
    resultado = string1.toUpperCase();
    return resultado;
}
const aMinusculas = (string1) => {
    let resultado;
    resultado = string1.toLowerCase();
    return resultado;
}
const esVocal = (string1) => {
    if ((string1 == "a") || (string1 == "e") || (string1 == "i") || (string1 == "o") || (string1 == "u")) return 1;
}
const contarVocales = (string1) => {
    let resultado, contador = 0;
    resultado = aMinusculas(string1);
    for (let i = 0; i < resultado.length; i++) {
        if (esVocal(resultado.charAt(i)) == 1) contador++;

    }
    return parseInt(contador);
}
const esPalindromo = (string1) => {
    let resultado, contador = 0;
    resultado = aMinusculas(string1);
    for (let i = 0; i < resultado.length - 1; i++) {
        if (resultado.charAt(i) == resultado.charAt((resultado.length - i))) contador++;

    }
    return contador == resultado.length
}

const loto = (numerosUsuario) => {
    let numerosGanadores = [6];
    let aciertos = 0;
    for (let i = 0; i < 6; i++) {
        numerosGanadores[i] = Math.floor(Math.random() * (40)) + 1;
    }
    for (let i = 0; i < 6; i++) {
        for (let k = 0; k < 6; k++) {
            if (numerosUsuario[i] == numerosGanadores[k]) aciertos++;
        }
    }
    return "tu numero de aciertos fue: " + aciertos + " El sorteo fue: " + numerosGanadores;
}



const rut = (string) => {
    let rutSinGuion = string.split("-")
    string = rutSinGuion[0]
    rutSinGuion = string.split(".")
    let rutSinPuntos = []
    for (let i = 0; i < rutSinGuion.length; i++) {
        rutSinPuntos = rutSinPuntos + rutSinGuion[i]
    }
    let numeroInvertido = ""
    for (let x = rutSinPuntos.length - 1; x >= 0; x--) {
        numeroInvertido = numeroInvertido + rutSinPuntos.charAt(x);
    }
    let resultado = 0;
    let secuencia = 2;
    for (let i = 0; i < numeroInvertido.length; i++) {
        resultado = resultado + (secuencia * parseInt(numeroInvertido.charAt(i)))
        secuencia++;
        if (secuencia == 8) secuencia = 2;
    }
    resultado = resultado % 11
    resultado = 11 - resultado
    if (parseInt(resultado) == 11) return "0";
    else if (parseInt(resultado) == 10) return "K";
    else return parseInt(resultado);
}

const encontrarElementoArray = (elemento, arreglo) => {
    for (let i = 0; i < arreglo.length; i++) {
        if (elemento == arreglo[i]) return true;

    }
    return false;
}

const buscarEnArray = (arreglo, busqueda, valor) => {
    let objetoEncontrado = {};
    if ((!parseInt(valor))) {
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i][busqueda] == valor) {
                objetoEncontrado = arreglo[i]
                return objetoEncontrado
            }
        }
        return objetoEncontrado
    } else if ((parseInt(valor))) {
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i][busqueda] == parseInt(valor)) {
                objetoEncontrado = arreglo[i]
                return objetoEncontrado
            }
        }
        return objetoEncontrado
    }
}
const arrayFiltrado = (arreglo, busqueda, valor) => {
    let arrayFiltro = [];
    if ((!parseInt(valor))) {
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i][busqueda] == valor) {
                arrayFiltro.push(arreglo[i])
            }
        }
        return arrayFiltro;
    } else if ((parseInt(valor))) {
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i][busqueda] == parseInt(valor)) {
                arrayFiltro.push(arreglo[i])
            }
        }
        return arrayFiltro;
    }
}

const ordenArray = (arreglo,orden) => {
    let swap = 0;
    if(orden == "mayor"){
        for (let j = 0; j < arreglo.length; j++) {
            for (let i = 0; i < arreglo.length; i++) {
                if (arreglo[i] > arreglo[j]) {
                    swap = arreglo[i];
                    arreglo[i] = arreglo[j];
                    arreglo[j] = swap;
                }
            }
        }
    }
    if(orden == "menor"){
        for (let j = 0; j < arreglo.length; j++) {
            for (let i = 0; i < arreglo.length; i++) {
                if (arreglo[i] < arreglo[j]) {
                    swap = arreglo[i];
                    arreglo[i] = arreglo[j];
                    arreglo[j] = swap;
                }
            }
        }
    }
    return arreglo;
}


export {
    ordenArray,
    arrayFiltrado,
    buscarEnArray,
    encontrarElementoArray,
    sumar,
    restar,
    multiplicar,
    dividir,
    validaNumero,
    validaTexto,
    aMayusculas,
    aMinusculas,
    contarVocales,
    esVocal,
    esPalindromo,
    porcentajes,
    rut,
    loto
}