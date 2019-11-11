
const sumar = (num1, num2) => num1 + num2

const validarTexto = text => {
    if (isNaN(text)) {
        return "Ha ingresado texto"
    } else {return "ha ingresado numeros"};

}

const textoAMinuscula = text => text.toLowerCase();

const textoAMayuscula = text2 => text2.toUpperCase();


export{
    sumar, validarTexto, textoAMinuscula, textoAMayuscula
}