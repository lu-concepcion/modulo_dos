export const operacionesAritmeticas = (opcion, numero1, numero2) => {
    let resultado = 0;
    if (opcion == 1) {
        resultado = parseInt(numero1) + parseInt(numero2);
    } else {
        if (opcion == 2) {
            resultado = parseInt(numero1) - parseInt(numero2);
        } else {
            if (opcion == 3) {
                resultado = parseInt(numero1) * parseInt(numero2);
            } else {
                if (numero2 == 0) {
                    resultado = "No se puede realizar esta division"
                } else {
                    resultado = parseInt(numero1)/parseInt(numero2);
                }
            }
        }
    }
    return resultado
}

export const verificarNumeros = (numero) => (isNaN(numero))