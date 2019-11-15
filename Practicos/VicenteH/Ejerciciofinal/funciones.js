const testing = () => {
    return "test";
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

module.exports = {
    testing
}