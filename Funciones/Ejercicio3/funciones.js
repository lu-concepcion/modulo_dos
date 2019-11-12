export const sacarPorcentaje = (numero, porcentaje) => {
    var resultado = 0;
    if (porcentaje <= 0 || porcentaje > 100) {
        resultado = "No se puede sacar un porcentaje con esos valores"
    } else {
        resultado = (numero * porcentaje) / 100;
    }
    return resultado
}

export const verificarNumero = (numero) =>(isNan(numero))