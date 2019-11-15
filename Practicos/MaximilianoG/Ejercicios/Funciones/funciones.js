// función para sumar dos variables
const sumar = (num1, num2) => {num1 + num2}

//validar lo que el usuario ingresa es texto o número
const validarTexto = text => {
    if (isNaN(text)) {
        return "Ha ingresado texto"
    } else {return "ha ingresado numeros"};
}

//convertir texto que ingresa el usuario de MAYUSCULA a minuscula
const textoAMinuscula = text => text.toLowerCase();

//convertir texto a MAYUSCULA
const textoAMayuscula = text2 => text2.toUpperCase();

//indentificar VOCALES en frase ingresada por usuario
const identificarVocales = text => {

    let contador = 0;
    for (let i = 0; i <text.length; i++) {
        if (text.charAt(i) == "A") {
            contador++;
        }
        if (text.charAt(i) == "E") {
            contador++;
        }
        if (text.charAt(i) == "I") {
            contador++;
        }
        if (text.charAt(i) == "O") {
            contador++;
        }
        if (text.charAt(i) == "U") {
            contador++;
        }
        if (text.charAt(i) == "a") {
            contador++;
        }
        if (text.charAt(i) == "e") {
            contador++;
        }
        if (text.charAt(i) == "i") {
            contador++;
        }
        if (text.charAt(i) == "o") {
            contador++;
        }
        if (text.charAt(i) == "u") {
            contador++;
        }
    }
    alert("Esta palabra tiene las siguientes vocales "+contador);
}


//función para verificar un palíndromo
const palindromo = text => {
    let alReves = text.length;
    for (let i = 0; i < text.length; i++) {
        alReves -= 1;
        if (text.charAt(i) == text.charAt(alReves)) {
            alert(text+" es un palíndromo")
        }else{ return text + " no es un palíndromo"}
    }
}

/*
función para que reciba dos números, y te ofrezca realizar las siguientes operaciones aritméticas:
Sumar
Multiplicar
Dividir (ojo con la división por cero)
Restar
*/

const aritmetica = (numero1, numero2) => {
    let text = prompt("que operación desea realizar");
    if (text == "sumar") {
       return numero1 + numero2
    }

    if (text == "multiplicar") {
        return numero1 * numero2
    }

    if (text == "restar") {
        return numero1 - numero2
    }

    if (text == "dividir") {
        while (numero1 > 0 && numero2 > 0) {
       let opcion =  prompt("si desea que el primer numero ingresado se divida por el segundo ingrese 1, de lo contrario numero 2 para la inversa");
       if (opcion == "1") {
            return numero1 / numero2
       }
       if (opcion == "2") {
            return numero2 / numero1
       }
    }
}}

/*
Escribir un algoritmo que reciba dos números y calcule el porcentaje del segundo con respecto al primero, ej:
Primer número: 90
Segundo número: 40
Resultado: 36%
*/

const porcentajes = (numero1, numero2) => {
    return ((numero1 / 100)* numero2);
}

//algoritmo que calcula el digito verificador de un RUN, implementando el módulo 11.
const digitoVerificador = run => {
    console.log(run.split()); /*Esta funcion separa la variable "numero" en palabras o letras de acuerdo a la condicion de esa manera podemos buscar indices[i] */
    alert(run);
    for (let i = 0; i < run.length; i++) {
        if (run[i] == ".") {
            alert("Debe ingresar su run sin puntos, guión, ni digito verificador");
            break;
        }
        if (run[i] == "-") {
            alert("Debe ingresar su run sin puntos, guión, ni digito verificador");
            break;
        }
        if (run.length != 8) {
            alert("Debe ingresar su run sin puntos, guión, ni digito verificador");
            break;
        }

        //logica para invertir el run
        let rutInvertido = [];
        let cont = -1;
        for (let i=run.length; i>=0; i--){
            rutInvertido[cont] =  run[i];
            cont++;
        }

        //multiplicar por 2, 3, 4, 5, 6, 7,
        let multiplicador = 1;
        let multiplicador2 = -5;
        for (let i = 0; i < rutInvertido.length; i++) {
            multiplicador++;
            multiplicador2++;
            if (multiplicador <= 7) {
                rutInvertido[i] = rutInvertido[i] * multiplicador
            }
            if (multiplicador2 >=2) {
                rutInvertido[i] = rutInvertido[i] * multiplicador2
            }
        }

        //sumar cada indice del arreglo y asignarlo a otra variable
        let sumaTotal = 0;
        for (let i = 0; i < rutInvertido.length; i++) {
            sumaTotal = sumaTotal + rutInvertido[i]
        }

        // sacar el 11% a la suma total yfinalizar operación
        let resto = sumaTotal % 11;
        let digVerificador = 11 - resto;
        if (digVerificador == 11) {
            digVerificador = 0;
        }
        if (digVerificador == 10) {
            digVerificador = "k";
        }

        alert("su digito verificador es "+digVerificador);

    }
}

/*
//encontrar texto o numeros entre los elementos de un arreglo
const verificarTexto = text => {
    const elementosArray = ["nombre", "Pedro", 4, 8];
    let contador = 0;
    for (let i = 0; i < elementosArray.length; i++) {
        if (elementosArray[i] == text) {
            return true   
        }
        if (elementosArray[i] != text) {
            contador++
            if (contador == elementosArray.length) {
                return false
            }
        }
    }
}
*/

//encontrar un objeto dentro de un arreglo
/*
const buscarEnArray = (array, propiedad, valor) => {
    //alert(array[0][propiedad0])
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i][propiedad] == valor) {
            console.log(propiedad)
            console.log(valor);
        }
        if (array[i] != propiedad) {
            contador++
            if (contador == array.length) {
                console.log("NO SE ENCUENTRA EN EL ARREGLO");
            }
        }
    }
}
*/

//Funcion para validar si se encuentra un numero o texto ingresado por el usuario en un array.
const buscarNumeroTexto = (array, elemento) =>{
    console.log(array.includes(elemento));
    return array.includes(elemento);
}
/*
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

*/

//funcion para buscar (el anterior era solo validar) en un arreglo.
const buscarEnArray = (array, propiedad, valor) => {
    let objeto = {};
    array.forEach(element => {
        if (element[propiedad] == valor) {
            objeto = element;
        }
    }
    );
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

//funcion para ordenar de menor a mayor un arreglo
const ordenarMenorAMayor = array => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j+1]) {
            [array[j], array[j+1]] = [array[j+1], array[j]]
            }
        }
    }
    return array;
}
//

export{
    sumar, validarTexto, textoAMinuscula, textoAMayuscula, identificarVocales,
    palindromo, aritmetica, porcentajes, digitoVerificador,
    buscarNumeroTexto, buscarEnArray, filtrarEnArray, ordenarMenorAMayor
}
