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
    return Math.random(1, 41)
}

//Funcion para validar array con (texto/número)
const buscarNumeroTexto = (array, elemento) => {
    console.log(array.includes(elemento))
    return array.includes(elemento);
}
//funcion para buscar en array
const buscarEnArray = (array, propiedad, valor) => {
    let objeto = {};
    array.forEach(element => {
        if(element[propiedad] == valor){
            objeto = element;
        }
    });
    return objeto;
}
//funcion para filtrar array
const filtrarEnArray = (array, propiedad, valor) => {
    let objeto = [];
    array.forEach(element => {
        if(element[propiedad] == valor){
            element.push(objeto);
        }
    });
    return objeto;
}

//funcion para ordenar menor a mayor array
const ordenarMenorAmayor = (num1,num2) => {
    return num1-num2

}
//funcion para ordenar mayor a menor array
const ordenarMayorAmenor = (num1,num2) => {
    return num1+num2
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

//funcion factorial
const factorial =(num) => {
    let total = 1; 
    let i = 0;
	for (i=1; i<=num; i++) {
		total = total * i; 
	}
	return total; 
}



const validarTexto = text => {
    if (isNaN(text)) {
        return  "texto ingresado correctamente"
    } else {
        return "Vuelta a intentar"
    }
}



//Funcion para buscar objetos  en un array
// const buscarElemento = elemento => {
//     let elemento =  ["vehiculo", "hola","chao","wena", "byebye"]
//     return elemento[2];
// }

//Funcion para convertir texto en minuscula
const convertirMinuscula = text => text.toLowerCase()


//FUncion para convertir texto en mayuscula
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
    validarNumeros, operacionesMatematicas, calcularPorcentaje, aleatorios, buscarNumeroTexto,buscarEnArray,
    filtrarEnArray, factorial, ordenarMenorAmayor, ordenarMayorAmenor
}


