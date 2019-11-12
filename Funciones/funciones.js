//Funcion para sumar
const sumar  = (num1,num2) => {
    return num1+num2
}

//Funcion para restar
const restar = (num1,num2) => {
    return num1-num2
}

//Funcion para multiplicar
const multiplicar =(num1, num2) => {
    return num1*num2
}

//Funcion para dividir
const dividir = (num1,num2) => {
    return num1/num2
}

const validarTexto = text => {
    if (isNaN(text)) {
        return  "texto ingresado correctamente"
    } else {
        return "Vuelta a intentar"
    }
}

const convertirMinuscula = text => text.toLowerCase()

const convertirMayuscula = text => text.toUpperCase()


const encontrarVocales = text => {
    let  contador = 0;
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == "A") {
        contador++;        
    }
}
    alert(contador)
}

export {
    sumar, validarTexto, convertirMinuscula, convertirMayuscula, restar, encontrarVocales
}


