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

//funcion para validar numeros
const validarNumeros = numero => (isNaN(numero))

//Funcion para numeros aleatorios
const aleatorios = num => {
    return (Math.random(1, 41)
}


//funcion para todas las operaciones
const operacionesMatematicas = (opcion, num1, num2) => {
    let resultado = 0;

         if (opcion == 1) { resultado = sumar(num1,num2)}      
         if (opcion == 2) { resultado = restar(num1,num2)}  
         if (opcion == 3) { resultado = multiplicar(num1,num2)}
         if (opcion == 4) { if (num2 == 0) { resultado = "Operacion no realizada"; } 
                     else { resultado = dividir(num1,num2) } }

        return resultado
    }

//funcion para porcentaje
const calcularPorcentaje = (num1,num2) => {
    return num2 * num1 / 100
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
    sumar, validarTexto, convertirMinuscula, convertirMayuscula, restar, encontrarVocales,
    validarNumeros, operacionesMatematicas, calcularPorcentaje, aleatorios
}


