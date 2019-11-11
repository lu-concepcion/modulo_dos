
const sumar = (num1, num2) => num1 + num2

const validarTexto = text => {
    if (isNaN(text)) {
        return "Ha ingresado texto"
    } else {return "ha ingresado numeros"};

}

export{
    sumar, validarTexto
}
